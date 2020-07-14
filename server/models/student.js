const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Student = new Schema({
  name: {
    type: String,
  },
  register_no: {
    type: String,
  },
  branch: {
    type: String,
  },
  age: {
    type: String,
  },
});

module.exports = mongoose.model("Student", Student);
