const Project = require("../models/projects.model");

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

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content cannot be empty!"
        });
    }

    const project = new Project({
        id: req.body.id,
        projectname: req.body.projectname,
        projectdesc: req.body.projectdesc,
        startdate:  req.body.startdate,
        enddate: req.body.enddate
    });

    Project.create(project, (err, data) => {
        if(err)
            res.status(500).send({
                message: 
                err.message || "Some error occurred while creating the project."
            });
        else res.send(data);
    });
};
 
// TODO: complete the code as per the instructions given in Assignment 3
