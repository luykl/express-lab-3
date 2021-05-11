import express from "express";
import Assignment from "../model/Assignment";
import {updateAssignment, readAssignmentById} from "../model/assignments-data";


const routes = express.Router();

//EDIT

routes.get('/:id/edit-assignment', (req, res) => {
    const id = parseInt(req.params.id);
    const assignment = readAssignmentById(id);
    if (assignment) {
      res.render('edit-assignment', { assignment });
    } else {
      res.status(404).render('error/not-found');
    }
  });
  
  routes.post('/:id/edit-assignment-confirmation', (req, res) => {
    const assignment:Assignment = {
      name: req.body.name,
      score: req.body.score,
      totalPossible: req.body.totalPossible,
      complete: req.body.complete,
      id: parseInt(req.params.id),
    }
    if(updateAssignment(assignment)) {
      res.render('edit-assignment-confirmation', { assignment });
    } else {
      res.status(404).render('error/not-found');
    }
  });

  //DELETE


export default routes;