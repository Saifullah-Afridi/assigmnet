const Book = require("../models/bookModel");
const catchAsyncError = require("../services/catchAsyncError");
const AppError = require("../services/AppError");

exports.createBook = catchAsyncError(async (req, res, next) => {
  const { book_ID, book_Name, book_Author, book_Description, edition } =
    req.body;
  const findBook = await Book.findOne({ book_ID });
  if (findBook) {
    return next(new AppError("The Book with this ID already exist", 404));
  }
  const book = await Book.create({
    book_ID,
    book_Name,
    book_Author,
    book_Description,
    edition,
  });

  res.status(201).json({
    status: "success",
    book,
  });
});

exports.getSingleBook = catchAsyncError(async (req, res, next) => {
  const { book_ID, book_Name, book_Author, book_Description, edition } =
    req.body;
  const book = await Book.findOne({
    book_ID,
    book_Name,
    book_Author,
    book_Description,
    edition,
  });
  if (!book) {
    return next(new AppError("this book does not exist", 404));
  }

  res.status(200).json({
    staus: "success",
    book,
  });
});

exports.updateBook = catchAsyncError(async (req, res, next) => {
  const { book_ID } = req.body;
  const book = await Book.findOneAndUpdate(
    {
      book_ID,
      book_Name,
      book_Author,
      book_Description,
      edition,
    },
    req.body,
    { new: true, runValidators: true }
  );
  if (!book) {
    return next(new AppError("No book found with this id", 404));
  }
  res.status(200).json({
    stauts: "success",
    message: "book has been updated",
  });
});

exports.deleteBook = catchAsyncError(async (req, res, next) => {
  const { book_ID, book_Name, book_Author, book_Description, edition } =
    req.body;

  const book = await Book.findOneAndDelete({
    book_ID,
    book_Name,
    book_Author,
    book_Description,
    edition,
  });

  res.status(201).json({
    status: "success",
    book,
  });

  res.status(200).json({
    stauts: "success",
    message: "book has been deleted",
  });
});
