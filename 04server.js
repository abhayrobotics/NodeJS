// Express js

var express = require('express')

let app = express();

const db = require("./05db")
const Person = require("./models/Person")

const bodyParser =require("body-parser")
app.use(bodyParser.json())

app.get('/', function(req,res){

    res.send("Welcome to server home");
})

app.post('/person', async (req,res)=>{

    // Save the new person into the database
try{
    const data = req.body // Assuming the request body contains the person data

    // create a new person document using mongoose model
    const newPerson  = new Person(data);
    
    const response = await newPerson.save()
    console.log("person saved");
    res.status(200).json(response)
}
catch(error){
    console.log({"eror":error})
    res.status(500).json({error:"Internal Server Error"})

}

app.get('/person', async (req,res)=>{
    try{

        const data =await Person.find();
        console.log('Data fetched')
        res.status(200).json(data)
    }
    catch(error){
        console.log({"eror":error})
        res.status(500).json({error:"Internal Server Error"})
    }


})

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



app.listen(3000,()=>{
    console.log("Express JS server is running at 3000")
});
