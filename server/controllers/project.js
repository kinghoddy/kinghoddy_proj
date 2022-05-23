const Project = require("../models/project");
exports.getProjects = (req, res, next) => {
  res.status(200).json({
    data: [
      {
        title: "Skychat Web",
        description: "A social media app",
        url: "/",
        link: "https://skyhat,tk",
      },
    ],
  });
};

exports.createProject = (req, res) => {
  const project = new Project({
    title: req.body.title,
    description: req.body.description,
    images: req.body.images,
  });

  project
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Post created Successfully",
        post: result,
      });
    })
    .catch((err) => {
      if (!err.statusCode) err.statusCode = 500;
      next;
      err;
    });
};
