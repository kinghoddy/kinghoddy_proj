const express = require("express");
const { body } = require("express-validator");
const projectControllers = require("../controllers/project");
const storageControllers = require("../controllers/storage");

const router = express.Router();

const html = `<html>
    <body>
       <h1>You have reached kinghoddy api</h1> 
    </body>
</html>`;

// GET /
router.get("/", (req, res) => {
  res.send(html);
});

// GET  /projects
router.get("/projects", projectControllers.getProjects);
// GET /project/:projectId
router.get("/project/:id", projectControllers.getSingleProject);

// POST /project  to add new post
router.post(
  "/project",
  [
    body("title").trim().isLength({ min: 5 }),
    body("description").trim().isLength({ min: 5 }),
  ],
  projectControllers.createProject
);
// POST /projects/:projectId  to update a post
router.post("/project/:id", projectControllers.updateProject);

// POST /deleteProject/:projectId  to delete a post
router.post("/deleteProject/:id", projectControllers.deleteProject);

// GET /storage  - Reads all files in the store
router.get("/storage", storageControllers.listImages);
router.post("/storage/add", storageControllers.saveImage);

module.exports = router;
