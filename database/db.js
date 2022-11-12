const mongoose = require('mongoose');

const conn = ()=>{
    mongoose.connect("mongodb://localhost:27017/basic-banking-system").then(()=> {
        console.log("Database Connection Successfull ... ");
    }).catch((err) =>{
        console.log(err)
    })
}

//     mongoose.connect(process.env.DB_URL)



module.exports = conn;
