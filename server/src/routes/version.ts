import express from "express";
import * as VersionController from "../controllers/version";

const versionRoutes = express.Router();

versionRoutes.get("/", VersionController.getVersion);

versionRoutes.get("/:versionID", VersionController.getVersionID);

versionRoutes.patch("/:versionID", VersionController.updateVersion);

export default versionRoutes;