import express from "express";
import * as CoursesController from "../controllers/courses";

const router = express.Router();

router.get("/", CoursesController.getCourses);

router.get("/:courseID", CoursesController.getCourse);

router.post("/", CoursesController.createCourse);

router.patch("/:courseID", CoursesController.updateCourse);

router.delete("/:courseID", CoursesController.deleteCourse);

export default router;