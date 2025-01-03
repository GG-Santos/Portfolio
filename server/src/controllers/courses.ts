import { RequestHandler } from "express";
import CourseModel from "../models/node";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import { z } from "zod";

export const getCourses: RequestHandler = async (req, res, next) => {
    try {
        const courses = await CourseModel.find().exec();
        res.status(200).json(courses);
    } catch (error) {
        next(error);
    }
}

export const getCourse: RequestHandler = async (req, res, next) => {
    const courseID = req.params.courseID;

    try {
        if (!mongoose.isValidObjectId(courseID)) {
            throw createHttpError(400, "Invalid Course ID!");
        }

        const course = await CourseModel.findById(courseID).exec();

        if (!course) {
            throw createHttpError(404, "Course not found!");
        }

        res.status(200).json(course);
    } catch (error) {
        next(error);
    }
}

const courseSchema = z.object({
    term: z.string().nonempty("Term Required!"),
    type: z.string().nonempty("Type Required!"),
    code: z.string().nonempty("Code Required!"),
    units: z.string().nonempty("Units Required!"),
    title: z.string().nonempty("Title Required!"),
    description: z.string().optional(),
    professor: z.string().optional(),
    section: z.string().optional(),
    midterm: z.string().optional(),
    final: z.string().optional(),
    status: z.string().nonempty("Status Required!"),
    modules: z.array(z.string()).optional(),
});

export const createCourse: RequestHandler = async (req, res, next) => {
    try {
        const parsedBody = courseSchema.parse(req.body);

        const newCourse = await CourseModel.create(parsedBody);

        res.status(201).json(newCourse);
    } catch (error) {
        if (error instanceof z.ZodError) {
            next(createHttpError(400, error.errors.map(e => e.message).join(", ")));
        } else {
            next(error);
        }
    }
}

interface UPdateCourseParams {
    courseID: string,
}

export const updateCourse: RequestHandler<UPdateCourseParams> = async (req, res, next) => {
    const courseID = req.params.courseID;

    try {
        if (!mongoose.isValidObjectId(courseID)) {
            throw createHttpError(400, "Invalid Course ID!");
        }

        const parsedBody = courseSchema.parse(req.body);

        const course = await CourseModel.findById(courseID).exec();

        if (!course) {
            throw createHttpError(404, "Course not found!");
        }

        Object.assign(course, parsedBody);

        const updatedCourse = await course.save();

        res.status(200).json(updatedCourse);
    } catch (error) {
        if (error instanceof z.ZodError) {
            next(createHttpError(400, error.errors.map(e => e.message).join(", ")));
        } else {
            next(error);
        }
    }
};

export const deleteCourse: RequestHandler = async (req, res, next) => {
    const courseID = req.params.courseID;

    try {
        if (!mongoose.isValidObjectId(courseID)) {
            throw createHttpError(400, "Invalid Course ID!");
        }

        const deletedCourse = await CourseModel.findByIdAndDelete(courseID).exec();

        if (!deletedCourse) {
            throw createHttpError(404, "Course not found!");
        }
        res.status(204).json({ message: "Course deleted successfully", course: deletedCourse });
    } catch (error) {
        next(error);
    }
};