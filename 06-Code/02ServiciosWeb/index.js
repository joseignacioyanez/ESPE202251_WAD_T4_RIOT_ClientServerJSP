const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config()

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

// Make an Index for the API
app.get("/restaurant", function(req,res) {
    res.send("Hello World!")
})
