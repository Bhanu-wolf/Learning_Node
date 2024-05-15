const mongoose = require("mongoose");

//define person schema
const menuSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  price: {
    type: Number,
    reuire: true,
  },
  taste: {
    type: String,
    enum: ["sour", "sweet", "spicy"],
  },
});

const MenuItem = mongoose.model("MenuItem", menuSchema);
module.exports = MenuItem;
