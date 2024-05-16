// writing database connection code
const mongoose = require("mongoose");
require("dotenv").config();

//MongoDB connection URL
//const mongoURL = process.env.MOONGO_DB_URL_LOCAL;
const mongoURL = process.env.MOONGO_DB_URL;

//setup mongoose connection
(async() => {
    await mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
})();

//get the default connection
//Mongoose maintains a default connections object representing the MongoDB connection.
const db = mongoose.connection;

//define event listener

db.on("connected", () => {
    console.log("Connected to MongoDB server");
});

db.on("disconnected", () => {
    console.log("Disconnected MongoDB server");
});

db.on("error", (err) => {
    {
        console.log("Error in Connection ", err);
    }
});

module.exports = db;