const mongoose = require('mongoose');

const conn = ()=>{
    mongoose.connect("mongodb+srv://Patil122002:FSIbcBJFpkZB0ii7@cluster0.p3ixoej.mongodb.net/bank?retryWrites=true&w=majority").then(()=> {
        console.log("Database Connection Successfull ... ");
    }).catch((err) =>{
        console.log(err)
    })
}

//     mongoose.connect(process.env.DB_URL)



module.exports = conn;
