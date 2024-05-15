// using command npm init.
// ---->
//npm init is a simple command that initializes a Node.js project by creating a package.json file,
//which is essential for managing dependencies, configuring your project, and documenting its details.

//--------> creating  a server

// const http = require("http");

// http
//   .createServer((req, res) => {
//     res.write("Heyy Bhanu How are you");
//     res.end();
//   })
//   .listen(4600);

//  creating a server using express
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello I am server");
// });

// app.get("/whey/isolate", (req, res) => {
//   const protein = {
//     companyName: "As it is Atom",
//     typeOfProtein: "Isolate",
//     price: 2200,
//     amount: "1Kg",
//   };
//   res.send(protein);
// });
// app.listen(3000, () => {
//   console.log("listening on port 3000");
// });
