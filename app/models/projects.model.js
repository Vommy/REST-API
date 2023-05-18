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
 * Gets all projects
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
 * Gets projects by ID.
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
 * Gets projects by project name.
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
 * Update projects by project ID.
 * @param {*} id 
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
 * Create new projects
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
 * Deletes all projects from the database.
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
 * Deletes projects by project ID.
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