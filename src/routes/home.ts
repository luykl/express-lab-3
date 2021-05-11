import express from "express";
import {displayAverage, readAllAssignments} from "../model/assignments-data";


const routes = express.Router();

routes.get("/", (req, res) => {
    const assignments = readAllAssignments();
    const average = displayAverage();
    res.render("home", {assignments, average});
});


export default routes;