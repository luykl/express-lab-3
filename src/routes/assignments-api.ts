import express from "express";
import Summary from "../model/Summary";
import { allAssignments, displayAverage } from "../model/assignments-data";

const routes = express.Router();


routes.get("/assignments", (req, res) => {
    res.status(200);
    res.json(allAssignments);

})

const summary:Summary = {
    overallAverage: displayAverage(),
    assignments: allAssignments
}

routes.get("/summary", (req, res) => {
    const summary:Summary = {
        overallAverage: displayAverage(),
        assignments: allAssignments
    }
    res.status(200);
    res.json(summary);
})




export default routes;