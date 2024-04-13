const mongoose = require("mongoose");
require("dotenv").config();
const blogSchema = new mongoose.Schema(
  {
    title: { type: String },
    desc: { type: String },
    image: { type: String },
    categories: { type: String },
    type: { type: String },

  },
  { timestamps: true }
);
blogSchema.methods = {
  toBlogJSON() {
    return {
      id: this._id,
      title: this.title,
      desc: this.desc,
      image: this.image,
      categories:this.categories,
    };
  },
};

const Blog = mongoose.model("blog", blogSchema);
module.exports = Blog;
