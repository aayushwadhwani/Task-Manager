const connectDB = require('./db/connect');
const express = require('express');
require('dotenv').config();
const tasks = require('./routes/tasks');
const port = 5000;

const app = express();

//middlewares
app.use(express.static('./public'));
app.use(express.json());//we will send json as the body...

app.get('/',(req,res)=>{
    res.status(200).send('Task Manager App');
});
app.use('/api/v1/tasks',tasks);

const runApp = async() => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`Listening on port ${port}...`);
        });
    }catch(err){
        console.log(err);
    }
}
runApp();

