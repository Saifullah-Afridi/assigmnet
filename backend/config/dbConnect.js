const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose

    .connect(
      "mongodb+srv://saifullah:####@cluster0.emayfwj.mongodb.net/bookstore",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("database connected successfully");
    });
  mongoose.set("strictQuery", true);
};

module.exports = dbConnect;
