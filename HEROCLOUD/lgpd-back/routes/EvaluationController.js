import express from 'express';
let router = express.Router();

import evaluationService from '../services/EvaluationService.js';

router.post("/addEvaluation", async function(req, res){
    const EvaluationModel = {
        concept: req.body.concept,
    }

    const user = await userService.saveEvaluation(EvaluationModel);
    return res.status(200).json(user);
});

router.get("/getAllEvaluations", async function(req, res){
    const allEvaluations = await userService.getAllEvaluations();
    return res.status(200).json(allEvaluations);
});

router.get("/user/:id", async function(req, res){
    const user = await userService.getEvaluationById(req.params.id);
    return res.status(200).json(allEvaluations);
});

router.delete("/deleteEvaluation/:id", async function(req, res){
    const user = await userService.deleteEvaluationById(req.params.id);
    return res.status(200).json(user);
});

router.put("/updateEvaluation/:id", async function(req, res){
    const EvaluationModel = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
    }

    const user = await userService.updateEvaluationById(req.params.id, EvaluationModel);
    return res.status(200).json(user);
});

export default router;