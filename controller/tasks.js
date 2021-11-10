const mongoose = require('mongoose');
const taskModel = require('../models/task');

const getAllTasks = async (req,res) => {
    try{
        const allTasks = await taskModel.find({});
        res.status(200).json({allTasks});
    }catch(err){
        console.log(err);
        res.status(500).json({allTasks});
    }
}

const getSingleTask = async (req,res) => {
    let { id:taskID } = req.params;
    taskID = mongoose.Types.ObjectId(taskID);
    try {
        const task = await taskModel.findOne({_id:taskID});
        if(!task){
            return res.status(404).json({message:`Cannot Find Task with ID ${taskID}`});
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({error});
    }
}

const createTask = async (req,res) =>{
    const body = req.body;
    try{
        const addTask = await taskModel.create(body);
        res.status(200).json(addTask);
    }catch(err){
        res.status(500).json(err);
    }
}

const updateTask = (req,res) =>{
    res.status(200).send('Updated A task');
}

const deleteTask = async (req,res) => {
    const { id:taskID } = req.params;
    try {
        const deleteTask = await taskModel.findOneAndDelete({_id:taskID});
        if(!deleteTask){
            return res.status(404).json({message:`Cannot find task with id ${taskID}`});
        }
        res.status(200).json({deleteTask});
    } catch (error) {
        res.status(500).json({error});
    }
}

module.exports = {
    getAllTasks,
    getSingleTask,
    deleteTask,
    updateTask,
    createTask
};