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
  "mongodb://john:mark@cluster0-shard-00-00-b2gf1.mongodb.net:27017,cluster0-shard-00-01-b2gf1.mongodb.net:27017,cluster0-shard-00-02-b2gf1.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
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
