const { Decimal128 } = require('bson');
const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    idCard:{
        required:true,
        type: String
    },
    name:{
        required:true,
        type: String
    },
    address:{
        required: true,
        type: String
    },
    cellphone:{
        required: true,
        type: String
    },
    email:{
        required: true,
        type: String
    }
})