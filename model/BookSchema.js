const mongoose = require("mongoose");

const bookTemplate = new mongoose.Schema({
  title: { type: String, required: [true, "Book title is required"] },
  author: { type: String, required: [true, "Author is required"] },
  publisher: { type: String, required: [true, "Publisher is required"] },
  isbn: { type: String, required: [true, "Isbn is required"] },
  pages: { type: String, required: [true, "Pages is required"] },
  description: { type: String },
});

module.exports = mongoose.model("books", bookTemplate);
