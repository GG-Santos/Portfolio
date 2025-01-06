import express from "express";
import * as CoursesController from "../controllers/courses";

const coursesRoutes = express.Router();

coursesRoutes.get("/", CoursesController.getCourses);

coursesRoutes.get("/:courseID", CoursesController.getCourse);

coursesRoutes.post("/", CoursesController.createCourse);

coursesRoutes.patch("/:courseID", CoursesController.updateCourse);

coursesRoutes.delete("/:courseID", CoursesController.deleteCourse);

export default coursesRoutes;