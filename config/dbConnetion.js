const mongoose = require("mongoose");

require("dotenv").config();
const url = process.env.MONGODB_URL;
mongoose.connect(url);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("✓ Database Connected...");
});
