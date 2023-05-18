const Project = require("../models/projects.model");

/**
 * @author Veren Villegas 1574646
 * @description Controller that handles the logic for selecting a project by ID from the database.
 * @param {*} req The request object from the client.
 * @param {*} res The response object from the server.
 */
exports.findByID = (req, res) => {
    //If there is no ID specified,
    if(!req.query.id){
        res.status(400).send({
            message:
                "A project ID must be specified :0"
        })
    }
    else{
        Project.getByID(req.query.id, (err, data) =>{
            if(err){
                res.status(500).send({
                    message: 
                        err.message || "Some error occurred while trying to get the project by ID."
                });
            }
            else res.send(data);
        });
    }
};

/**
 * @author Veren Villegas 1574646
 * @description Controller that handles the logic for selecting a project by name from the database.
 * @param {*} req The request object from the client.
 * @param {*} res The response object from the server.
 */
exports.findByName = (req, res) => {
    if(!req.query.projectname){
        res.status(400).send({
            message:
                "A project name must be specified!"
        });
    }
    else{
        Project.getByProjectName(req.query.projectname, (err, data) =>{
            if(err){
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while trying to get the project by Name."
                })
            }
            else res.send(data);
        });
    }
};

/**
 * @author Veren Villegas 1574646
 * @description Controller that handles the logic for returning all of the projects from the database.
 * @param {*} req The request object from the client.
 * @param {*} res The response object from the server.
 */
exports.findAll = (req, res) => {
    Project.getAll((err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while getting all of the projects."
            });
        else res.send(data);
    });
};

/**
 * @author Veren Villegas 1574646
 * @description Controller that handles the logic for creating a new project.
 * Creates a new project using the data in the request body.
 * Then calls the projects.model.create(function).
 * Sends appropriate status to the user.
 * NULL values can be inserted by the user. Can enforce more data integrity from the API alongside the database. 
 * @param {*} req The request object used to receive data from the client.
 * @param {*} res The response object used for sending data back to the client.
 */
exports.create = (req, res) => {
    //Check that the request is valid (There is data to create the project)
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty!"
        });
    }

    //Create the new project object to pass into projects.model.create()
    const project = new Project({
        projectname: req.body.projectname,
        projectdesc: req.body.projectdesc,
        startdate:  req.body.startdate,
        enddate: req.body.enddate
    });

    //Create the project using projects.model.create().
    Project.create(project, (err, data) => {
        if(err)
            res.status(500).send({
                message: 
                err.message || "Some error occurred while creating the project."
            });
        else res.send(data);
    });
};

/**
 * @author Veren Villegas 1574646
 * @description Controller that handles the logic for updating a project based on the project's ID.
 * @param {*} req The request object from the client.
 * @param {*} res The response object from the server.
 */
exports.update = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty!"
        });
    }
    Project.updateProject(req.body, (err, data) => {
        if(err)
            res.status(500).send({
                message: 
                err.message || "Some error occurred while creating the project."
            });
        else res.send(data);
    });
};

/**
 * @author Veren Villegas 1574646
 * @description Handles the logic for deleting all of the projects from the database.
 * @param {*} req The request object from the client.
 * @param {*} res The response object from the server.
 */
exports.deleteAllProjects = (req, res) => {
    Project.deleteAll((err, data) => {
    if(err)
        res.status(500).send({
            message:
                err.message || "Some error occurred while trying to delete all projects."
        });
        else res.send(data);
    });
};

/**
 * @author Veren Villegas 1574646
 * @description Handles the logic for deleting the project with the specified id from the database.
 * @param {*} req The request object from the client.
 * @param {*} res The response object from the server.
 */
exports.deleteProjectByID = (req, res) => {
    if(!req.query.id){
        res.status(400).send({
            message:
                "A project id must be specified!"
        });
    }
    else{
        Project.deleteByID(req.query.id, (err, data) =>{
            if(err){
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while trying to delete the project with ID: " + req.query.id
                })
            }
            else res.send(data);
        });
    }
}

 
// TODO: complete the code as per the instructions given in Assignment 3
