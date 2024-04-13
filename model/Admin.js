const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const adminSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

adminSchema.methods = {
  createToken() {
    return jwt.sign(
      {
        id: this._id,
        email: this.email,
      },
      process.env.EXPRESS_SECRET,
      { expiresIn: 5184000 }
    );
  },

  toAdminJSON() {
    return {
      id: this._id,
      email: this.email,
      token: `${this.createToken()}`,
    };
  },
};

const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
