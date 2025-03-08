var fs = require('fs');
var os = require('os');

// import files from other loation
var notes = require("./021notes.js")

// 
var _= require('lodash')

//! learning FS and OS
// let user = os.userInfo()
// console.log(user)

// fs.appendFile("greetings.txt","Hi "+user.username+" ! \n",()=>{
//     console.log("file append complete")
// });

// ! loading variable and function from other files
console.log(notes.age)

console.log(notes.addNum(notes.age,20))

// ! lodash use case
let arr = [1,1,2,3,4,32,2,"person","person",true,"person"]

// gives unique array
console.log(_.uniq(arr))

console.log(_.camelCase(" Abhay kumar gupta"))

