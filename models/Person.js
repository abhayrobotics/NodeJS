
const mongoose  = require("mongoose");

const PersonSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:["Waiter","Manager","Chef"],
        required:true
    },
    mobile:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    }
})

// create a person model

const Person = mongoose.model('Person',PersonSchema);

module.exports = Person;