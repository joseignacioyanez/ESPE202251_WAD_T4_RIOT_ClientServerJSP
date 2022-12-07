const { Decimal128 } = require('bson');
const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
    status:{
        required:true,
        type: String
    },
    code:{
        required:true,
        type: String
    },
    category:{
        required: true,
        type: String
    },
    name:{
        required: true,
        type: String
    },
    price:{
        required: true,
        type: Decimal128
    },
    paysTaxes:{
        required: true,
        type: String
    }
})

module.exports = mongoose.model('MenuItems', menuItemSchema)