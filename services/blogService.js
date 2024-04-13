const Blog = require("../model/Blog");
class BlogService {
  async addBlog(body) {
    try {
      const blog = new Blog({
        ...body,
      });
      const blogSave = await blog.save();
      console.log("blogSave::: ", blogSave);
      if (!blogSave) {
        return;
      } else {
        return blogSave;
      }
    } catch (err) {
      return err;
    }
  }

  async uploadImageBlog(req) {
    const { file } = req;
    const id = req.body.id;
    try {
      const updateProviderById = await Blog.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            image: `${process.env.LIVE_URL}/${file?.path}`,
          },
        }
      );
      console.log("updateProviderById::: ", updateProviderById);
      if (!updateProviderById) {
        return;
      } else {
        try {
          let findUser = await Blog.find({ _id: id });
          if (findUser) {
            console.log("findUser::: ", findUser);
            return findUser;
          } else {
            return null;
          }
        } catch (e) {
          return e;
        }
      }
    } catch (e) {
      return err;
    }
  }

  async updateBlog(body) {
    console.log("body::: ", body);
    const { id, title, desc } = body;
    try {
      const updateProviderById = await Blog.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            title,
            desc,
          },
        }
      );
      console.log("updateProviderById::: ", updateProviderById);
      if (!updateProviderById) {
        return;
      } else {
        try {
          let findProvider = await Blog.find({ _id: id });
          if (findProvider) {
            console.log("findProvider::: ", findProvider);
            return findProvider;
          } else {
            return null;
          }
        } catch (e) {
          return e;
        }
      }
    } catch (e) {
      return err;
    }
  }

  async deleteBlog(body) {
    const { id } = body;
    try {
      const result = await Blog.deleteOne({
        _id: id,
      });
      if (result) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return e;
    }
  }

  async allBlog(body) {
    try {
      let findProvider = await Blog.find();
      console.log('findProvider', findProvider)
      if (findProvider) {
        console.log("findProvider::: ", findProvider);
        return findProvider;
      } else {
        return null;
      }
    } catch (e) {
      return e;
    }
  }
}
const blogService = new BlogService();
module.exports = blogService;
