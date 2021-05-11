import express from "express";
import Assignment from "../model/Assignment";
import {updateAssignment, readAssignmentById, deleteAssignment, createAssignment} from "../model/assignments-data";


const routes = express.Router();

//EDIT

routes.get("/:id/edit-assignment", (req, res) => {
    const id = parseInt(req.params.id);
    const assignment = readAssignmentById(id);
    if (assignment) {
      res.render("edit-assignment", { assignment });
    } else {
      res.status(404).render("error/not-found");
    }
  });
  
  routes.post("/:id/edit-assignment-confirmation", (req, res) => {
    const assignment:Assignment = {
      name: req.body.name,
      score: req.body.score,
      totalPossible: req.body.totalPossible,
      complete: req.body.complete,
      id: parseInt(req.params.id),
    }
    if(updateAssignment(assignment)) {
      res.render("edit-assignment-confirmation", { assignment });
    } else {
      res.status(404).render("error/not-found");
    }
  });

  //DELETE

  routes.get("/:id/delete-assignment-confirmation", (req, res) => {
    const id = parseInt(req.params.id);
    const assignment = readAssignmentById(id);
    if (assignment) {
      deleteAssignment(id);
      res.render("delete-assignment-confirmation", { assignment });
    } else {
      res.status(404).render("error/not-found");
    }
  });

  //ADD

  routes.get("/add-assignment", (req, res) => {
    res.render("add-assignment");
  });
  
  routes.post('/add-assignment-confirmation', (req, res) => {
    const assignment: Assignment = {
      name: req.body.name,
      score: parseInt(req.body.score),
      totalPossible: parseInt(req.body.totalPossible),
      complete: req.body.complete
    }
    createAssignment(assignment);
    res.render('add-assignment-confirmation', { assignment });
  });






export default routes;