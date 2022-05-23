const express = require("express");
const projectControllers = require("../controllers/project");

const router = express.Router();

const html = `<html>
    <body>
       <h1>You have reached kinghoddy api</h1> 
    </body>
</html>`;
router.get("/", (req, res) => {
  res.render(html);
});

// GET  /projects
router.get("/projects", projectControllers.getProjects);

module.exports = router;
