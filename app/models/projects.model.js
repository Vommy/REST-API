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
 * Get all projects
 * @param {*} result 
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
 * Get projects by ID
 * @param {*} result 
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
 * Get projects by project name
 * @param {*} result 
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
 * Update projects by project ID
 * @param {*} id 
 */
Project.updateProject = (updateInfo, result) => {
  db.query("UPDATE projects SET projectname = ?, projectdesc = ?, startdate = ?, enddate = ? WHERE id = ?", 
  [updateInfo.projectname, updateInfo.projectdesc, updateInfo.startdate, updateInfo.enddate, updateInfo.id], (err, res) => {
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
 * @param {*} newProject 
 * @param {*} result 
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
 * Delete all projects from the database
 * @param {} id 
 */
Project.deleteAll = result => {
  //Fix SQL STATEMENT
  db.query("DELETE from projects where 1", (err, res) => {
    if(err){
      console.log("Error: ", err);
      result(err, null);
      return;
    }
    console.log("Projects: ", res);
    result(null, res);
  });
};

/**
 * Delete projects by project ID
 * @param {*} id 
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