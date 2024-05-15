const express = require("express");
const router = express.Router();
const Person = require("../models/person");

router.post("/", async (req, res) => {
  try {
    const data = req.body; // assuming that request body contain the person data

    //create a new person document using mongoose model
    const newPerson = new Person(data);

    //save the person data to database
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log("error in saving data", error);
    res.status(500).json({ error: "Internal server problem" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).send(data);
  } catch (err) {
    console.log("error in fetching data", err);
    res.status(500).json({ error: "Internal server problem" });
  }
});

// router.get("/:name", async (req, res) => {
//   try {
//     const workType = ["manager", "chef", "waiter"];
//     const name = req.params.name;
//     if (!workType.includes(name)) {
//       data = await Person.find({ name });
//       if (data.length < 1) {
//         console.log("No user with that name");
//         return res.status(404).json({ error: "No user with that name" });
//       }
//       res.status(200).send(data);
//       console.log("data fetched");
//     } else {
//       res.status(404).send({ error: "Invalid Name" });
//     }
//   } catch (err) {
//     console.log("error in fetching data", err);
//     res.status(500).json({ error: "Internal server problem" });
//   }
// });

router.get("/:work", async (req, res) => {
  try {
    const workType = ["manager", "chef", "waiter"];
    const work = req.params.work;
    if (workType.includes(work)) {
      const data = await Person.find({ work });
      console.log("data fetched");
      res.status(200).send(data);
    } else {
      console.log("Not found");
      res.status(404).send("Invalid work type");
    }
  } catch (err) {
    console.log("error in fetching data", err);
    res.status(500).send("Internal server problem");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;

    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true, //return the updated document
        runValidators: true, //Run Mongoose validation
      }
    );
    console.log(!response);
    if (!response) {
      return res.status(404).send({ error: "Invalid Id" });
    }
    console.log("data updated");
    res.status(200).send(response);
  } catch (err) {
    console.log("error", err);
    res.status(500).send("Internal server down");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);
    if (!response) {
      return res.status(404).send({ error: "Invalid Id" });
    }
    console.log("data deleted successfully");
    res.status(200).send({ message: "data deleted successfully" });
  } catch (err) {
    console.log("error", err);
    res.status(500).send("Internal server down");
  }
});

module.exports = router;
