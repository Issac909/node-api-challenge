const express = require("express");
const projects = require("../data/helpers/projectModel");
const router = express.Router();

router.get("/", (req, res) => {
  projects
    .get()
    .then((data) => res.status(200).json(data))
    .catch((err) =>
      res.status(404).json({ message: "Error retrieving", err })
    );
});

router.get("/:id", validateProjectId, (req, res) => {
  projects
    .get(req.params.id)
    .then((project) => res.status(200).json(project))
    .catch((err) =>
      res.status(404).json({ message: "Couldnt find project with that ID", err })
    );
});

router.get("/actions/:id", validateProjectId, (req, res) => {
  projects
    .getProjectActions(req.params.id)
    .then((action) => res.status(200).json(action))
    .catch((err) =>
      res.status(404).json({ message: "No actions found", err })
    );
});

router.post("/", validateProject, (req, res) => {
  projects
    .insert(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) =>
      res.status(404).json({ message: "Error attempting to create post", err })
    );
});

router.delete("/:id", validateProjectId, (req, res) => {
  projects
    .remove(req.params.id)
    .then((project) => {
      res.status(200).json({ message: "project deleted" });
    })
    .catch((err) =>
      res.status(404).json({ message: "Cant delete that project", err })
    );
});

router.put("/:id", validateProjectId, validateProject, (req, res) => {
  projects
    .update(req.params.id, req.notes)
    .then((data) => res.status(201).json(data))
    .catch((err) =>
      res.status(404).json({ message: "Couldnt update the project", err })
    );
});

module.exports = router;
