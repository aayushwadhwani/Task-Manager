const notFound = (req,res) =>{
    res.status(404).send('Route Unavailable');
}

module.exports = notFound;