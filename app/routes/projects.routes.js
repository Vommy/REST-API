module.exports = app => {
  const projects = require("../controllers/projects.controller");

  app.get("/projects", projects.findByID);

  app.get("/projects", projects.findAll);

  app.post("/newproject", projects.create);



  // TODO: complete the code as per the instructions given in Assignment 4
}