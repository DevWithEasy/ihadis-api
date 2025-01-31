const mongoose = require('mongoose')

const dbConnection = ()=>{
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.URI)
    .then(res=>console.log('Connected to database'))
    .catch(err => console.log(err))
}

module.exports = dbConnection