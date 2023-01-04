const mongoose = require('mongoose');
const DB_URI = process.env.MongoDB_URI;
const conn = ()=>{
    mongoose.connect(DB_URI).then(()=> {
        console.log("Database Connection Successfull ... ");
    }).catch((err) =>{
        console.log(err)
    })
}

//     mongoose.connect(process.env.DB_URL)



module.exports = conn;
