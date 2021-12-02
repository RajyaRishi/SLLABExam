const mongoose = require("mongoose")
const { Schema } = mongoose;

const libraryrecord = new Schema({
    bookname: String,
    studname: String,
    dateissue: String,
})

module.exports = mongoose.model("LibraryRecords", libraryrecord, "LibaryManagement")