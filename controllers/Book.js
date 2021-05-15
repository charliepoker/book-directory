const bookSchema = require("../model/BookSchema");

// GET BOOKS
exports.getBooks = async (req, res) => {
  try {
    const books = await bookSchema.find();
    res.status(200).json({
      message: "success",
      data: books,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed",
      error: error.message,
    });
  }
};

// GET BOOK
exports.getBook = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await bookSchema.findById(id);
    res.status(200).json({
      message: "success",
      data: book,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed",
      error: error.message,
    });
  }
};

// CREATE BOOK
exports.createBook = async (req, res) => {
  const { title, author, publisher, isbn, pages, description } = req.body;

  try {
    const book = await bookSchema.create({
      title,
      author,
      publisher,
      isbn,
      pages,
      description,
    });
    res.status(201).json({
      message: "Success",
      data: book,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed",
      error: error.message,
    });
  }
};

// PATCH BOOK
exports.updateBook = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await bookSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Success",
      data: book,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed",
      error: error.message,
    });
  }
};

// DELETE BOOK
exports.deleteBook = async(req, res) => {
  const id = req.params.id;
  try {
      await bookSchema.findByIdAndDelete(id);
      res.status(204).json({
          status: "success",
      data: null,
      })
  } catch (error) {
      res.status(404).json({
        status: "Failed",
        error: error.message,
      });
  }
};
