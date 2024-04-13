const { createResponse, createError } = require("../../utils/helpers");
const BlogService = require("../../services/blogService");

class BlogController {
  async addBlog(req, res) {
    try {
      const blog = await BlogService.addBlog(req.body);
      console.log("blog::: ", blog);
      if (blog) {
        createResponse(res, true, "blog register successfully ..", blog);
      } else {
        createResponse(
          res,
          false,
          "Unable to create new blog,please try again.."
        );
      }
    } catch (e) {
      createResponse(res, false, e);
    }
  }
  async uploadImageBlog(req, res) {
    try {
      const isValid = await BlogService.uploadImageBlog(req);
      console.log("isValid::: ", isValid);
      if (isValid) {
        createResponse(res, true, "upload successfully ...", isValid);
      } else {
        createResponse(res, false, "Error upload");
      }
    } catch (e) {
      createError(res, e);
    }
  }

  async updateBlog(req, res) {
    try {
      console.log("req.body::: ", req.body);
      const provider = await BlogService.updateBlog(req.body);
      console.log("provider::: ", provider);
      if (provider) {
        createResponse(res, true, "Blog updated successfully ..", provider);
      } else {
        createResponse(res, false, "Unable to update  Blog,please try again..");
      }
    } catch (e) {
      createResponse(res, false, e);
    }
  }

  async deleteBlog(req, res) {
    try {
      console.log("req.body::: ", req.body);
      const provider = await BlogService.deleteBlog(req.body);
      console.log("provider::: ", provider);
      if (provider) {
        createResponse(res, true, "Blog deleted successfully ..");
      } else {
        createResponse(res, false, "Unable to delete  blog,please try again..");
      }
    } catch (e) {
      createResponse(res, false, e);
    }
  }

  async allBlog(req, res) {
    try {
      console.log("req.body::: ", req.body);
      const provider = await BlogService.allBlog(req.body);
      console.log("provider::: ", provider);
      if (provider) {
        createResponse(res, true, "Blog get successfully ..", provider);
      } else {
        createResponse(res, false, "Unable to get blog,please try again..");
      }
    } catch (e) {
      createResponse(res, false, e);
    }
  }
}
const blogController = new BlogController();
module.exports = blogController;
