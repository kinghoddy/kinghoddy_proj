const Project = require("../models/project");
const { validationResult } = require("express-validator");

exports.getProjects = (req, res, next) => {
  Project.find()
    .then((data) =>
      res.status(200).json({ messages: "Fetched Successfully", data })
    )
    .catch((err) => {
      if (!err.statusCode) err.statusCode = 500;
      next(err);
    });
};

exports.createProject = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("Validation Failed");
    err.statusCode = 422;
    throw err;
  }
  const project = new Project({
    title: req.body.title,
    description: req.body.description,
    images: req.body.images,
    link: req.body.link,
  });

  project
    .save()
    .then((data) => {
      res.status(201).json({
        message: "Post created Successfully",
        data,
      });
    })
    .catch((err) => {
      if (!err.statusCode) err.statusCode = 500;
      next(err);
    });
};

exports.getSingleProject = (req, res, next) => {
  Project.findById(req.params.id)
    .then((data) => {
      if (!data) {
        const error = new Error("Post not found");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: "Fetched Successfully", data });
    })
    .catch((err) => {
      if (!err.statusCode) err.statusCode = 500;
      next(err);
    });
};
exports.updateProject = (req, res, next) => {
  Project.findById(req.params.id)
    .then((project) => {
      project.title = req.body.title;
      project.description = req.body.description;
      project.link = req.body.link;
      project.images = req.body.images;
      return project.save();
    })
    .then((data) =>
      res.status(200).json({ message: "Project Updated successfully", data })
    )
    .catch((err) => {
      if (!err.statusCode) err.statusCode = 500;
      next(err);
    });
};
exports.deleteProject = (req, res, next) => {
  Project.findByIdAndRemove(req.params.id)
    .then((data) =>
      res.status(200).json({ message: "Project deleted successfully", data })
    )
    .catch((err) => {
      if (!err.statusCode) err.statusCode = 500;
      next(err);
    });
};
