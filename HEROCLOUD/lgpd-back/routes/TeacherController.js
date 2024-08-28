import express from 'express';
let router = express.Router();

import teacherService from '../services/TeacherService.js';

router.post("/addTeacher", async function(req, res){
    const TeacherModel = {
        name: req.body.name,
    }

    const user = await userService.saveTeacher(TeacherModel);
    return res.status(200).json(user);
});

router.get("/getAllTeachers", async function(req, res){
    const allTeachers = await userService.getAllTeachers();
    return res.status(200).json(allTeachers);
});

router.get("/user/:id", async function(req, res){
    const user = await userService.getTeacherById(req.params.id);
    return res.status(200).json(allTeachers);
});

router.delete("/deleteTeacher/:id", async function(req, res){
    const user = await userService.deleteTeacherById(req.params.id);
    return res.status(200).json(user);
});

router.put("/updateTeacher/:id", async function(req, res){
    const TeacherModel = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
    }

    const user = await userService.updateTeacherById(req.params.id, TeacherModel);
    return res.status(200).json(user);
});

export default router;