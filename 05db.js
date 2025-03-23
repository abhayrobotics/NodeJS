const mongoose  = require("mongoose");

// define mongoDB connection URL
const mongoUrl = "mongodb://localhost:27017/hotels";

// set up mongo Db connection

mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db =mongoose.connection;

db.on('connected',()=>{
    console.log("Connected to MOngoDb Server")

})
db.on('disconnected',()=>{
    console.log("Disconnected from MOngoDb Server")

})
db.on('error',(e)=>{
    console.log("Error Found",e)

})

module.exports ='db';