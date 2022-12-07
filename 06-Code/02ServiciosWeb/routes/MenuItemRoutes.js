const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem")

module.exports = router;

router.get("/menuItems", async (req, res) => {
    console.log(await MenuItem.find());
    try {
        const menuItemsData = await MenuItem.find();
        res.status(200).json(menuItemsData);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})