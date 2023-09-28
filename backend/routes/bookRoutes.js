const express = require("express");
const router = express.Router();
const {
  createBook,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookControllers");

router.post("/", createBook);
router.patch("/update", updateBook);
router.post("/delete/", deleteBook);
router.post("/singlebook", getSingleBook);
module.exports = router;
