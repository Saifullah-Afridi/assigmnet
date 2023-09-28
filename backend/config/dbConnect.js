const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose

    .connect(
      "enterurihere"
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
