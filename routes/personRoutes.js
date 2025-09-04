const express = require("express");

const router = express.Router();

const Person = require("../models/Person");
 const {jwtAuthMiddleware,generateToken} =require("../jwt")
 
// post method to save data in DB
router.post("/signup", async (req, res) => {
  // Save the new person into the database
  try {
    const data = req.body; // Assuming the request body contains the person data

    // create a new person document using mongoose model
    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log("person saved");

    // console.log(toke)
    // Uing JWT
    const payload = {
      id:response.id,
      username: response.username
    }
    const token = generateToken(response.username)

    console.log(JSON.stringify(payload))
    console.log("token is :",token)

    res.status(200).json({response:response,token:token});


  } catch (error) {
    console.log({ eror: error });
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Login Router
router.post('/login',async(req,res)=>{
  try{

  
  // extract username and password from request body
  const {username,password} = req.body;

  // find user by username
  const user = await Person.findOne({username:username});

  // if user doeanot exist or password does notexist return error
  if(!user || !(await user.comparePassword(password))){
    return res.status(401).json({error:"invalid username or password"})
  } 

  // generate token
  const  payload = {
    id :user.id,
    username:user.username

  }

  const token = generateToken(payload);

  // return token as response
  res.json({token})
}catch (e) {
    console.log({ eror: error });
    res.status(500).json({ error: "Internal Server Error" });
  }
})

// get method to fetch data from DB
router.get("/", jwtAuthMiddleware,async (req, res) => {
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

// getting data for profile

// router.get('/profile',jwtAuthMiddleware, async (req,res)=>{
//   console.log("profile route working")
//   try{

//     // getting from jwtAuthMiddlewareresponse
//     const userInfo  = req.user;

//     console.log(userInfo)
//     const user  = await Person.findOne(userInfo.id)
//     res.status(200).json(user)
//   }
//   catch(err){
//     console.log({ eror: err });
//     res.status(500).json({ error: "Internal Server Error route" });
//   }

// })
// Profile route
router.get('/profile', jwtAuthMiddleware, async (req, res) => {
    try{
        const userData = req.user;
        console.log("User Data: ", userData);

        const userId = userData.id;
        const user = await Person.findById(userId);

        res.status(200).json({user});
    }catch(err){
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})



// update we need id of element to be updated and what data to be updated
// put and patch both syntax is same
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


// delete
router.delete('/:id',async (req,res)=>{

  try{

    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    if(!response){
      console.log("No Such item found")
    }
    console.log("item deleted")
    res.status(200).json({message:"Person deleted successfully"})
  }
  catch(error){
    console.log({ error: error });
    res.status(500).json({ error: "Internal Server Error" });
  }

})

module.exports = router;
