module.exports = app => {
  const projects = require("../controllers/projects.controller");

  app.get("/projects-by-name", projects.findByName);

  app.get("/projects-by-id", projects.findByID);

  app.get("/projects", projects.findAll);

  app.post("/new-project", projects.create);

  app.delete("/projects", projects.deleteAllProjects)

  app.delete("/projects-by-id", projects.deleteProjectByID)

  app.put("/projects-update", projects.update)

  //POSTMAN Testing Queries
  /**
   * TESTING - app.get("/projects", projects.findAll);
   *  GET http://localhost:3000/projects
   * 
   * TESTING -  app.get("/projects-by-name", projects.findByName);
   *  GET http://localhost:3000/projects-by-name?projectname=CRM System
   *  GET http://localhost:3000/projects-by-name?projectname=l
   *  GET http://localhost:3000/projects-by-name?
   * 
   * TESTING -   app.get("/projects-by-id", projects.findByID);
   * NOTE: ID's are different since I had to delete projects. Use appropriate ID when testing. 
   *  GET http://localhost:3000/projects-by-id?id=11
   *  GET http://localhost:3000/projects-by-id?id=abc
   *  GET http://localhost:3000/projects-by-id?
   * 
   * TESTING - app.post("/new-project", projects.create);
   *  POST http://localhost:3000/new-project
   *    REQUEST BODY:
   *      {
              "projectname": "RESTAPI's",
              "projectdesc": "Express, JSON, ,",
              "startdate" : "17/05/2023",
              "enddate": "18/05/2023"
          }
      POST http://localhost:3000/new-project
        REQUEST BODY:
          {

          }
      
    TESTING - app.delete("/projects", projects.deleteAllProjects)
       DELETE http://localhost:3000/projects

      TESTING - app.delete("/projects-by-id", projects.deleteProjectByID)
        DELETE  http://localhost:3000/projects-by-id?id=17

      TESTING -  app.put("/projects-update", projects.update)
        PUT http://localhost:3000/projects-update
          REQUEST BODY:
          {
                "id" : "18",
                "projectdesc": "Testing this update"
          }

        PUT http://localhost:3000/projects-update
          REQUEST BODY:
          {
                "id" : "18",
          }


        PUT http://localhost:3000/projects-update
          REQUEST BODY:
          {
              "id" : "100",
              "projectdesc": "Testing this update"
          }
   */

  // TODO: complete the code as per the instructions given in Assignment 4
}