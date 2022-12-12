const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
// Use environment variables for DB, PORT and WhatsApp
require("dotenv").config()

// Parser for error we had in class on POST when parsing body of Request
// modified from Tema 2 Tutorial 
// and https://stackoverflow.com/questions/69913477/cannot-read-properties-of-undefined-in-nodejs
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Routes 
const routesMenuItems = require("./routes/MenuItemRoutes");
const routesUsers = require("./routes/UsersRoutes");
const routesInvoices = require("./routes/InvoiceRoutes");
const routesClients = require("./routes/ClientRoutes");
app.use('/restaurant', routesMenuItems, routesUsers, routesInvoices, routesClients)

// Connect to DB Using Environment Variables
console.log("this are the credentials: " + process.env.MONGO_USER_T5 + process.env.MONGO_PSWD_T5)
url = `mongodb+srv://${process.env.MONGO_USER_T5}:${process.env.MONGO_PSWD_T5}@mongoji.nf5scze.mongodb.net/WAD_1_Invoicing_SantoPlacer?retryWrites=true&w=majority`;
const database = mongoose.connection;
mongoose.connect(url);
database.on("error", console.error.bind(console, "Error connecting to MongoDB"));
database.once('connected', () => {console.log("Succesfuly connected to MongoDB")});

app.use(express.json())

app.listen(process.env.PORT_T5, () => {
    console.log(`Server Running in Port ${process.env.PORT_T5}`)
})

// Make an Index for the API TODO
app.get("/restaurant", function(req,res) {
    res.send("Hello World!")
})