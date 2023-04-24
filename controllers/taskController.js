const Task = require("../schema/Task");

const getAllTask = async (req, res, next) => {
    let tasks; 
    try {
        tasks = await Task.find();
        return res.status(200).json({
            status: "successfully get all the task",
            tasks
        })
    }catch(err) {
        return res.status(500).json({
            status: "task not Found !",
            message: err.message
        })
    }
}

const getById = async (req, res, next) => {
    let task;
    try {
        task = await Task.findOne({_id:req.params.id});
        return res.status(200).json({
            status:"successfully get the specific task",
            task
        })
    }catch(err) {
        return res.status(500).json({
            status: "Failed to get specific task !",
            message: err.message
        })
    }
}

const addTask = async (req, res, next) => {
    let task;
    try {
        task = await Task.create({
            title: req.body.title,
            isCompleted: req.body.isCompleted,
        });
        return res.status(200).json({
            status: "successfully added task",
            task:task
        })
    }catch(err) {
        return res.status(500).json({
            status: "Failed to add task !",
            message: err.message
        })
    }
}

const updateTask = async (req, res, next) => {
    let task;
    try {
        task = await Task.updateOne({_id: req.params.id}, req.body);
        return res.status(200).json({
            status: "successfully update the task",
            task
        })
    }catch(err) {
        return res.status(500).json({
            status: "failed to update the task !",
            message: err.message
        })
    }
}

const deleteTask = async (req, res, next) => {
    let task;
    try {
        task = await Task.deleteOne({_id: req.params.id});
        return res.status(200).json({
            status: "successfully delete the task",
            task
        })
    }catch(err) {
        return res.status(500).json({
            status: "failed to delete the task",
            message: err.message
        })
    }
}

exports.getAllTask = getAllTask;
exports.getById = getById;
exports.addTask = addTask;
exports.updateTask = updateTask;
exports.deleteTask = deleteTask;