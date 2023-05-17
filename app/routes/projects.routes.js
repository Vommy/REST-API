module.exports = app => {
  const projects = require("../controllers/projects.controller");

  app.get("/projects-by-name", projects.findByName);

  app.get("/projects-by-ID", projects.findByID);

  app.get("/projects", projects.findAll);

  app.post("/new-project", projects.create);

  app.delete("/projects", projects.deleteAllProjects)



  // TODO: complete the code as per the instructions given in Assignment 4
}