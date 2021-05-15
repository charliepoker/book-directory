const express = require("express");
const router = express.Router();

const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/Book");

router.route("/").get(getBooks).post(createBook);

router.route("/:id").get(getBook).patch(updateBook).delete(deleteBook);

module.exports = router;
