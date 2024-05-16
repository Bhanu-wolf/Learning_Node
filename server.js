// // // // console.log("Bhanu");
// // // // console.log("Bhanu Bisht");

// // // (() => {
// // //   console.log("Bhanu Bisht");
// // // })();

// // //using node inBuilt modules

// // // const Os = require("os");
// // // const fs = require("fs");
// // // const { log } = require("console");
// // // const userInfo = Os.userInfo();

// // // fs.appendFile("greet.txt", "Hello everyone\n", () => {
// // //   log("Bhanu");
// // //   console.log(Os.userInfo(), Os.platform());
// // // });
// // // console.log(userInfo);

// // const notes = require("./notes");
// // // console.log(notes.greet());
// // notes.greet();
// // console.log(notes.name);
// const _ = require("lodash");
// let arr = [12, 45, 3, 45, 345, 345, 345, 45];
// // console.log(_.sortBy(arr, (arr) => -arr));
// console.log(_.sortBy(arr, (arr) => -arr));
// let newArr = _.sortBy(arr, (arr) => -arr);
// console.log(newArr);
// console.log(__dirname, "\n", __filename);
// console.log(process);
// console.log("your directory", __dirname);
// const dirName = __dirname;
// console.log(dirName);
// console.log(dirName.charAt[50]);
// console.log("you file name", __filename);

// //--------> create a server

// const http = require("http");

// http
//   .createServer((req, res) => {
//     res.write("Heyy Bhanu How are you");
//     res.end();
//   })
//   .listen(4600);
// const { add, greet, name } = require("./notes");
// // console.log(notes.name);

// console.log(add(2, "Bhanu BIsht"));

// const jsonString = '{"name":"Bhanu","age":23}';
// const obj = JSON.parse(jsonString);
// console.log(obj.name);
// console.log(JSON.stringify(obj));

//  creating a server using express
// const express = require("express");
// const app = express();
//

// app.get("/", (req, res) => {
//   res.send("Hello I am server");
// });

// // app.get("/whey/isolate", (req, res) => {
// //   const protein = {
// //     companyName: "As it is Atom",
// //     typeOfProtein: "Isolate",
// //     price: 2200,
// //     amount: "1Kg",
// //   };
// //   res.send(protein);
// // });

// // app.post("/person", (req, res) => {
// //   res.send("data aaya");
// // });

// app.listen(3000, () => {
//   console.log("listening on port 3000");
// });

//using mongoose
// const express = require("express");
// const app = express();
// const db = require("./db");
// const Person = require("./models/person");
// const MenuItem = require("./models/menu");
// const bodyParser = require("body-parser");
// app.use(bodyParser.json()); //req body

// app.get("/", (req, res) => {
//   res.send("Hello I am server");
// });

// app.post("/person", async (req, res) => {
//   try {
//     const data = req.body; // assuming that request body contain the person data

//     //create a new person document using mongoose model
//     const newPerson = new Person(data);

//     //save the person data to database
//     const response = await newPerson.save();
//     console.log("data saved");
//     res.status(200).json(response);
//   } catch (error) {
//     console.log("error in saving data", error);
//     res.status(500).json({ error: "Internal server problem" });
//   }
// });

// app.get("/person", async (req, res) => {
//   try {
//     const data = await Person.find();
//     console.log("data fetched");
//     res.status(200).send(data);
//   } catch (err) {
//     console.log("error in fetching data", err);
//     res.status(500).json({ error: "Internal server problem" });
//   }
// });

// // app.get("/person/:name", async (req, res) => {
// //   try {
// //     const name = req.params.name;
// //     data = await Person.find({ name });
// //     if (data.length < 1) {
// //       console.log("No user with that name");
// //       return res.status(404).json({ error: "No user with that name" });
// //     }
// //     res.status(200).send(data);
// //     console.log("data fetched");
// //   } catch (err) {
// //     console.log("error in fetching data", err);
// //     res.status(500).json({ error: "Internal server problem" });
// //   }
// // });

// app.get("/person/:work", async (req, res) => {
//   try {
//     const workType = ["manager", "chef", "waiter"];
//     const work = req.params.work;
//     if (workType.includes(work)) {
//       const data = await Person.find({ work });
//       console.log("data fetched");
//       res.status(200).send(data);
//     } else {
//       console.log("Not found");
//       res.status(404).send("Invalid work type");
//     }
//   } catch (err) {
//     console.log("error in fetching data", err);
//     res.status(500).send("Internal server problem");
//   }
// });

// app.post("/menu", async (req, res) => {
//   try {
//     const data = req.body;
//     const newMenu = new MenuItem(data);
//     const response = await newMenu.save();
//     console.log("Data Saved");
//     res.status(200).send(response);
//   } catch (err) {
//     console.log("error in saving", err);
//     res.status(500).send("Internal server problem");
//   }
// });

// app.get("/menu", async (req, res) => {
//   try {
//     const data = await MenuItem.find();
//     res.status(200).send(data);
//     console.log("data fetched");
//   } catch (err) {
//     console.log("error in saving", err);
//     res.status(500).send("Internal server problem");
//   }
// });

// app.listen(3000, () => {
//   console.log("listening on port 3000");
// });

//using express router------->

const express = require("express");
const app = express();
const { db, connectDatabase } = require("./db");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json()); //req body

//using env variable
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello I am Bhanu server");
});

//import the routes files
const personRoute = require("./routes/personRoutes");
const menuRoute = require("./routes/menuRoutes");
//use the routers
app.use("/person", personRoute);
app.use("/menu", menuRoute);

(async() => {
    try {
        connectDatabase();
        console.log('connected database server mai call function');
    } catch (err) {
        console.log("Not Connected to database", err);
    }
})();

app.listen(PORT, () => {
    console.log("listening on port 3000");
});