const express = require('express');
const port = 5000;

const app = express();

app.get('/',(req,res)=>{
    res.status(200).send('Task Manager App');
});

app.listen(port,()=>{
    console.log(`Listening on port ${port}...`);
});