const mongoose = require("mongoose");

const dbConnect = (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log("database connection error", err);
    });
};

module.exports = dbConnect;
