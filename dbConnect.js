const mongoose = require("mongoose");
const URL =
  "mongodb+srv://aayushmaa:prashant4119@cluster0.7jtnv9j.mongodb.net/studiorama";
mongoose.connect(URL);

let connectionObj = mongoose.connection;

connectionObj.on("connected", () => {
  console.log("MongoDB connection successful");
});

connectionObj.on("error", () => {
  console.log("MongoDB connection failed");
});
