console.log("Server is running");

// !method 1
// function add (a,b){
//     return a+b
// }

// !method 2
// var add  = function(a,b){
//     return a+b
// }

//! method 3
// var add  = (a,b)=>{
//     return a+b
// }

//! method 4
// var add =(a,b) => a+b;

// // a function that run without call

// (function(){
//     console.log("run function as written with ()")
// }())


// let result = add(5,4);
// console.log(result);


//? callback Function
// !method-1
// function callback (){
//     console.log("call ack called")
// }

// var add  = function(a,b){
//     console.log(a+b);
//     callback()
// }
// add(3,4)


//! method-2
function callback (){
    console.log("call ack called")
}

// var add  = function(a,b,callback){
//     console.log(a+b);
//     callback()
// }
// add(3,4,callback)


// !method-3
var add  = function(a,b,x){
    console.log(a+b);
    x();
}
// add(3,4,function(){
//     console.log ("call back method 2")
// })

// method-3.1
add(4,5,()=> console.log("callback 3.1"))


