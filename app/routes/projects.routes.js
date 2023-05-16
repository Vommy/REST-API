module.exports = app => {
  const projects = require("../controllers/projects.controller");

  projects.get("/aa", projects.findAll);

  projects.post("/aa", projects.create);

  // TODO: complete the code as per the instructions given in Assignment 4
}