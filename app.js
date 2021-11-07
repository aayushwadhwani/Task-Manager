const express = require('express');
const tasks = require('./routes/tasks');
const port = 5000;

const app = express();

//middlewares
app.use(express.json());//we will send json as the body...

app.get('/',(req,res)=>{
    res.status(200).send('Task Manager App');
});
app.use('/api/v1/tasks',tasks);

app.listen(port,()=>{
    console.log(`Listening on port ${port}...`);
});