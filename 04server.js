// Express js

var express = require("express");

let app = express();
require("dotenv").config()

const PORT = process.env.PORT || 3000;
const db = require("./05db");
const Person = require("./models/Person");
const MenuItem = require("./models/MenuItem");

const bodyParser = require("body-parser");
const { words } = require("lodash");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Welcome to server home");
});

// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require ('./routes/menuItemRoutes');

// using routes 
app.use("/person",personRoutes);
app.use('/menu',menuItemRoutes);


app.listen(PORT, () => {
  console.log("Express JS server is running at 3000");
});
