const getAllTasks = (req,res) =>{
    res.status(200).send('All Tasks Recieved');
}

const getSingleTask = (req,res) =>{
    res.status(200).send('A single task is being shown');
}

const createTask = (req,res) =>{
    res.status(200).send('Added A new task');
}

const updateTask = (req,res) =>{
    res.status(200).send('Updated A task');
}

const deleteTask = (req,res) =>{
    res.status(200).send('Deleted A task');
}

module.exports = {
    getAllTasks,
    getSingleTask,
    deleteTask,
    updateTask,
    createTask
};