const db = require("./db");

// TODO: complete the code as per the instructions given in Assignment 3


const Project = function(Project) {
  this.id = Project.id;
  this.projectname = Project.projectname;
  this.projectdesc = Project.projectdesc;
  this.startdate = Project.startdate;
  this.enddate = Project.enddate;
};

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

module.exports = Project;