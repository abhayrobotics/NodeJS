const express = require("express")
const router = express.Router()

const MenuItem = require('../models/MenuItem');


// post method to save menu Item data in DB
router.post('/',async(req,res)=>{
    try{

        const data = req.body;

        const newMenuItem = new MenuItem(data);
        const response= await newMenuItem.save();

        console.log("new Menu Item saved");
        res.status(200).json(response);
    }
    catch(error){
        console.log("Item not saved",error);
        res.status(500).json(error);

    }
})

// fetch menu item data
router.get('/', async (req,res)=>{
    try{
        const data = await MenuItem.find();
        console.log("Menu data fetched");
        res.status(200).json(data)
    }
    catch(error){
        console.log({ error: error });
        res.status(500).json({ error: "Internal Server Error" });
    }
})

module.exports =router;