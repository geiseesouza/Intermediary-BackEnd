import express from 'express';
let router = express.Router();

import courseService from '../services/CourseService.js';

router.post("/addCourse", async function(req, res){
    const CourseModel = {
        name: req.body.name,
    }

    const user = await userService.saveCourse(CourseModel);
    return res.status(200).json(user);
});

router.get("/getAllCourses", async function(req, res){
    const allCourses = await userService.getAllCourses();
    return res.status(200).json(allCourses);
});

router.get("/user/:id", async function(req, res){
    const user = await userService.getCourseById(req.params.id);
    return res.status(200).json(allCourses);
});

router.delete("/deleteCourse/:id", async function(req, res){
    const user = await userService.deleteCourseById(req.params.id);
    return res.status(200).json(user);
});

router.put("/updateCourse/:id", async function(req, res){
    const CourseModel = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
    }

    const user = await userService.updateCourseById(req.params.id, CourseModel);
    return res.status(200).json(user);
});

export default router;