const express = require("express");

const router = express.Router();

const Person = require("../models/Person");

// post method to save data in DB
router.post("/", async (req, res) => {
  // Save the new person into the database
  try {
    const data = req.body; // Assuming the request body contains the person data

    // create a new person document using mongoose model
    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log("person saved");
    res.status(200).json(response);
  } catch (error) {
    console.log({ eror: error });
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// get method to fetch data from DB
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log({ eror: error });
    res.status(500).json({ error: "Internal Server Error" });
  }
  console.log(res);
});

// Parameterised Api calls
router.get("/:workType1", async (req, res) => {
  try {
    // extracting the work typefrom url
    const workType = req.params.workType1;

    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const result = await Person.find({ work: workType });
      console.log(result);
      res.status(200).json(result);
    } else {
      res.status(400).json({ message: "Not found" });
    }
  } catch (e) {
    console.log({ eror: error });
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// update we need id of element to be updated and what data to be updated
router.put('/:id1',async (req,res)=>{
  try{
    //1. we need ID
    const personId = req.params.id1;
    // 2. we need updated data
    const updatedData = req.body;

    const response = await Person.findByIdAndUpdate(personId,updatedData,{
      new:true, //return the updated document
      runValidators:true // run mongoose validation
    })
    if(!response){
      console.log("PErson NOt found" )
    }
    console.log("data updated");
    res.status(200).json(response)


  }
  catch(e){
    console.log({ eror: error });
    res.status(500).json({ error: "Internal Server Error" });
  }
})

module.exports = router;
