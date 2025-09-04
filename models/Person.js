
const mongoose  = require("mongoose");
const bcrypt = require("bcrypt")

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
        enum:["waiter","manager","chef"],
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
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
// Hashing
PersonSchema.pre('save',async function (next){
    const person  = this;

    // hash the password only if it is modified or is new
    if(!person.isModified('password')) return next();
    
    try{
        // hash password generate
        const salt = await bcrypt.genSalt(10);

        // hashpassword
        const hashpassword = await bcrypt.hash(person.password,salt)
        person.password = hashpassword
        
        next()
    }
    catch(err){
        return next(err);
    }
})

// creating a compare function
PersonSchema.methods.comparePassword = async function (candidatePassword) {
    try{
        // console.log("check",this.password)
        
        const isMatch  = await bcrypt.compare(candidatePassword, this.password);
        // console.log(candidatePassword,isMatch)
        return isMatch;
    }   
    catch(err){
        throw err;
    } 
}
// "compare" password has inbuilt functionality that extract salt from hashed password so we dont need to add salt one more time


// create a person model

const Person = mongoose.model('Person',PersonSchema);

module.exports = Person;