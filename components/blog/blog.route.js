const express = require("express");
const router = express.Router();
const Upload = require("../../utils/multer");
const blogController = require("./blog.controller");

router.post("/addBlog", (req, res) => {
  blogController.addBlog(req, res);
});

router.post("/uploadImageBlog", Upload.single("file"), (req, res) => {
  blogController.uploadImageBlog(req, res);
});

router.patch("/updateBlog", (req, res) => {
  blogController.updateBlog(req, res);
});

router.post("/deleteBlog", (req, res) => {
  blogController.deleteBlog(req, res);
});
router.get("/allBlog", (req, res) => {
  blogController.allBlog(req, res);
});

module.exports = router;
