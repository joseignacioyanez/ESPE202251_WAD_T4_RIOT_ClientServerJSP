const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
require("dotenv").config()

// Parser for error we had in class on POST when parsing body of Request
// modified from Tema 2 Tutorial 
// and https://stackoverflow.com/questions/69913477/cannot-read-properties-of-undefined-in-nodejs
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Routes 
const routes = require("./routes/MenuItemRoutes");
app.use('/restaurant', routes)


// Port Config
const PORT = 3005;

/* Credentials with Environment Variables
require("dotenv").config
const user = process.env.USER_T5_RIOT
const password = process.env.PSWD_T5_RIOT
*/
//Change url with Env Variables TODO
url = `mongodb+srv://root:root@mongoji.nf5scze.mongodb.net/WAD_1_Invoicing_SantoPlacer?retryWrites=true&w=majority`;
const database = mongoose.connection;
mongoose.connect(url);

database.on("error", console.error.bind(console, "Error connecting to MongoDB"));
database.once('connected', () => {console.log("Succesfuly connected to MongoDB")});

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server Running in Port ${PORT}`)
})

// Make an Index for the API TODO
app.get("/restaurant", function(req,res) {
    res.send("Hello World!")
})