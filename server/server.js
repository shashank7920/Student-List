const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const router1 = require("./routes/studentRouter");
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  "",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.use("/student", router1);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
