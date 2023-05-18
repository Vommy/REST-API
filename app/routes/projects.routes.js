module.exports = app => {
  const projects = require("../controllers/projects.controller");

  app.get("/projects-by-name", projects.findByName);

  app.get("/projects-by-id", projects.findByID);

  app.get("/projects", projects.findAll);

  app.post("/new-project", projects.create);

  app.delete("/projects", projects.deleteAllProjects)

  app.delete("/projects-by-id", projects.deleteProjectByID)

  app.put("/projects-update", projects.update)

  //INCLUDE POSTMAN ROUTES TESTING

  // TODO: complete the code as per the instructions given in Assignment 4
}