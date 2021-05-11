import express from "express";
import {readAllAssignments} from "../model/assignments-data";


const routes = express.Router();

routes.get("/", (req, res) => {
    const assignments = readAllAssignments();
    res.render('home', {assignments});
});


export default routes;