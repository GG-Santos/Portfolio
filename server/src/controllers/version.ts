import { RequestHandler } from "express";
import VersionModel from "../models/version";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import { z } from "zod";


export const getVersion: RequestHandler = async (req, res, next) => {
    try {
        const version = await VersionModel.find().exec();
        res.status(200).json(version);
    } catch (error) {
        next(error);
    }
}
export const getVersionID: RequestHandler = async (req, res, next) => {
    const versionID = req.params.versionID;

    try {
        if (!mongoose.isValidObjectId(versionID)) {
            throw createHttpError(400, "Invalid Version ID!");
        }

        const version = await VersionModel.findById(versionID).exec();

        if (!version) {
            throw createHttpError(404, "Version not found!");
        }

        res.status(200).json(version);
    } catch (error) {
        next(error);
    }
}

const versionSchema = z.object({
    major: z.number(),
    minor: z.number(),
    patch: z.number(),
});

interface UpdateVersionParams {
    versionID: string,
}

export const updateVersion: RequestHandler<UpdateVersionParams> = async (req, res, next) => {
    const versionID = req.params.versionID;

    try {
        if (!mongoose.isValidObjectId(versionID)) {
            throw createHttpError(400, "Invalid Version ID!");
        }

        const parsedBody = versionSchema.parse(req.body);

        const version = await VersionModel.findById(versionID).exec();

        if (!version) {
            throw createHttpError(404, "Version not found!");
        }

        Object.assign(version, parsedBody);

        const updatedVersion = await version.save();

        res.status(200).json(updatedVersion);
    } catch (error) {
        if (error instanceof z.ZodError) {
            next(createHttpError(400, error.errors.map(e => e.message).join(", ")));
        } else {
            next(error);
        }
    }
};