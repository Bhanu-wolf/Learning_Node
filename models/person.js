const mongoose = require("mongoose");

//define person schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    require: true,
  },
  mobile: {
    type: Number,
    require: true,
    unique: true,
  },
});

//create person model
const Person = mongoose.model("Person", personSchema);
module.exports = Person;
