const mongoose = require("mongoose")
const { Schema } = mongoose;

const liststudents = new Schema({
    Name: String,
    regno: String,
    marks: Number
})

module.exports = mongoose.model("ListStudents", liststudents, "ListOfStudents")