const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbConnect = require("./config/dbConnect");
const booksRoutes = require("./routes/bookRoutes");
//middleware
app.use(express.json(``));
app.use(morgan("dev"));
app.use(
  "*",
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

//database connection
dbConnect();

//routes

app.use("/api/books", booksRoutes);
//connection
const port = 8000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
