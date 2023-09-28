const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const bookSchema = new mongoose.Schema({
  book_ID: {
    type: String,
    required: true,
    unique: true,
    maxLength: 50,
  },
  book_Name: {
    type: String,
    required: true,
    maxLength: 50,
  },
  book_Author: {
    type: String,
    required: true,
    maxLength: 50,
  },
  book_Description: {
    type: String,
    required: true,
    maxLength: 50,
  },
  edition: {
    type: Number,
    default: 1,
    max: 10,
  },
});
//Export the model
module.exports = mongoose.model("Book", bookSchema);
