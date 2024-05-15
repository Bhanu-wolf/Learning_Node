const express = require("express");
const router = express.Router();
const MenuItem = require("../models/menu");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log("Data Saved");
    res.status(200).send(response);
  } catch (err) {
    console.log("error in saving", err);
    res.status(500).send("Internal server problem");
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    res.status(200).send(data);
    console.log("data fetched");
  } catch (err) {
    console.log("error in saving", err);
    res.status(500).send("Internal server problem");
  }
});

module.exports = router;
