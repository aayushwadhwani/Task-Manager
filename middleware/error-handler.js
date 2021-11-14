const { customAPIError } = require('../errors/custom-errors');

const errorHandlerMiddleware = (err,req,res,next) =>{
    if(err instanceof customAPIError){
        return res.status(err.statusCode).json({err:err.message});
    }
    res.status(500).json({msg:err});   
}

module.exports = errorHandlerMiddleware;