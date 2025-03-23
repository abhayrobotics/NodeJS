// Express js

var express = require('express')

let app = express();



app.get('/', function(req,res){

    res.send("Welcome to server home");
})


app.get('/chicken', function(req,res){

    res.send("KFC chicken is here");
})


app.get('/dosa', function(req,res){

    let dosa_variety={
        "Rs. 100":"masala Dosa",
        'Rs. 250':"Cheese Dosa"
    }    
    res.send(dosa_variety);
})

app.post('/items',(req,res)=>{
    res.send("Data Received")
})

app.listen(3000,()=>{
    console.log("server is running at 3000")
});
