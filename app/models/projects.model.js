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
 * @param {} result 
 */
Project.getByID = result => {

}

/**
 * Get projects by project name
 * @param {*} result 
 */
Project.getByProjectName = result => {

}

/**
 * Update projects by project ID
 * @param {*} id 
 */
Project.updateProject = (id) => {

}

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

}

/**
 * Delete projects by project ID
 * @param {*} id 
 */
Project.deleteByID = (id) => {

}
module.exports = Project;