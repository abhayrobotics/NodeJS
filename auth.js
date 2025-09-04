var express = require("express");

let app = express();
const Person = require("./models/Person");

// Authentication middleware
const passport = require('passport')
const localStratergy = require('passport-local').Strategy;


// Authentication
passport.use(new localStratergy (async (username1,password1,done)=>{
  // Authentication logic
  try{
    console.log('credentials received:',username1,password1)
    const user = await Person.findOne({username:username1})
   console.log(user)
    if(!user){
      return done(null , false,{message:"Username wrong"})
    }
    const isPasswordMatch = await user.comparePassword(password1);
    if(isPasswordMatch){
      return done(null,user)
    }
    else{
      return done(null, false,{message:"wrong password"})
    }
  }
  catch(e){
    return done(e)
  }
}))
const localAuthMiddleware= passport.authenticate('local',{session:false})
app.use(passport.initialize())

module.exports = localAuthMiddleware