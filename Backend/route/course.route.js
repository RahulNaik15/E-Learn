import express from "express";
import { getCourse,getPaidCourseById } from "../controller/course.controller.js";

const router = express.Router()

router.get("/", getCourse);
router.get('/paidcourses/:id', getPaidCourseById);

export default router;