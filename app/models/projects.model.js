const db = require("./db");

// TODO: complete the code as per the instructions given in Assignment 3

const Project = function(Project) {
  this.id = Project.id;
  this.projectname = Project.projectname;
  this.projectdesc = Project.projectdesc;
  this.startdate = Project.startdate;
  this.enddate = Project.enddate;
};

/**
 * @author Veren Villegas 1574646
 * @description Gets all projects from the database.
 * @param {*} result The result of the query.
 */
Project.getAll = result => { 
  db.query("SELECT * from projects", (err, res) => {
    if(err){
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    console.log("Projects: ", res);
    result(null, res)
  });
};

/**
 * @author Veren Villegas 1574646
 * @description Gets projects by ID from the database.
 * @param {*} result The result of the query.
 */
Project.getByID = (id, result) => {
  db.query("SELECT * from projects where id = ?", id, (err, res) =>{
    if(err){
      console.log("Error: ", err)
      result(null, err);
      return;
    }
    else
      console.log("Projects: ", res)
      result(null, res)
  });
};

/**
 * @author Veren Villegas 1574646
 * @description Gets projects by project name from the database.
 * @param {*} result The result of the query.
 */
Project.getByProjectName = (name, result) => {
  db.query("SELECT * from projects where projectname = ?", name, (err, res) =>{
    if(err){
      console.log("Error: ", err);
      result(null, err);
      return;
    }
    else
      console.log("Projects: ", res);
      result(null, res);
  });
};

/**
 * @author Veren Villegas 1574646
 * @description Update projects by project ID.
 * @readonly Tried implementing some data integrity checks, like if a user omitted a property from their request (maybe they only wanted to update the startdate).
 * I achieved this by updating a query string, though there are probably much better ways to do this.
 * I also check that values aren't null and making sure to use parameterized queries. 
 * Could possibly refactor to check if the keys provided are in the database.
 * Database could also implement data integrity checks since user can put different values where they shouldn't be (like words in the date).
 * @param {*} id The ID of the project
 */
Project.updateProject = (updateInfo, result) => {
  if(updateInfo.id == null) return;
  updateQuery = "UPDATE projects SET ";
  updateParams = Object.keys(updateInfo);
  updateValues = Object.values(updateInfo);
  goodValues = [];
  for(let i = 0; i < updateValues.length; i++) {
    if(updateParams[i] == "id"){
      continue;
    }
    if(updateValues[i] != null){
      updateQuery += updateParams[i] + " = ?,";
      goodValues.push(updateValues[i]);
    }
  };
  updateQuery = updateQuery.slice(0, updateQuery.length - 1);
  updateQuery += " WHERE id = ?";
  goodValues.push(updateInfo.id);
  db.query(updateQuery, goodValues, (err, res) => {
    if(err){
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    console.log("Updated project: ", res);
    result(null, res);
  });
};

/**
 * @author Veren Villegas 1574646
 * @description Creates new projects and inserts them into the database.
 * @param {*} newProject The new project to insert into the database.
 * @param {*} result The result of the query.
 */
Project.create = (newProject, result) => {
  db.query("INSERT into projects SET ?", newProject, (err, res) => {
    if(err){
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    console.log("Created project:", {id: res.insertId, ...newProject});
    result(null, {id: res.insertId, ...newProject});
  });
};

/**
 * @author Veren Villegas 1574646
 * @description Deletes all projects from the database.
 */
Project.deleteAll = result => {
  //Fix SQL STATEMENT
  db.query("DELETE from projects where 1", (err, res) => {
    if(err){
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    console.log("All projects deleted: ", res);
    result(null, res);
  });
};

/**
 * @author Veren Villegas 1574646
 * @description Deletes projects by project ID.
 * @param {*} id The id of the project to delete.
 */
Project.deleteByID = (id, result) => {
  db.query("DELETE from projects where id = ?", id, (err, res) => {
    if(err){
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    else{
      //Can possibly change what the console logs in terms of the project
      console.log("Project deleted:", res);
      result(null, res);
    }
  });
};

module.exports = Project;