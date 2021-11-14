const taskModel = require('../models/task');
const asyncWrapper = require('../middleware/asyncWrapper');
const { createCustomError, customAPIError } = require('../errors/custom-errors');

const getAllTasks = asyncWrapper( async (req,res) => {
    const allTasks = await taskModel.find({});
    res.status(200).json({allTasks});
})

const getSingleTask = asyncWrapper( async (req,res, next) => {
    let { id:taskID } = req.params;
    const task = await taskModel.findOne({_id:taskID});
    if(!task){
        return next(createCustomError(`No task Found with task id ${taskID}`,404));
    }
    res.status(200).json({task});
})

const createTask = asyncWrapper( async (req,res) =>{
    const body = req.body;
    const addTask = await taskModel.create(body);
    res.status(200).json(addTask);
})

const updateTask = asyncWrapper( async (req,res) =>{
    const { id:taskID } = req.params;
    const data = req.body;
    const task = await taskModel.findOneAndUpdate({_id:taskID},data,{new:true, runValidators:true});
    if(!task){
        return next(customAPIError(`No task found with task id ${taskID}`,404));
    }
    res.status(200).json({task});
})

const deleteTask = asyncWrapper( async (req,res) => {
    const { id:taskID } = req.params;
    const deleteTask = await taskModel.findOneAndDelete({_id:taskID});
    if(!deleteTask){
        return next(createCustomError(`No task found with task id ${taskID}`,404));
    }
    res.status(200).json({deleteTask});
})

module.exports = {
    getAllTasks,
    getSingleTask,
    deleteTask,
    updateTask,
    createTask
};