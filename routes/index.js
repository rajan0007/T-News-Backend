const authRoutes = require("../components/auth/auth.route");
const blogRoutes = require("../components/blog/blog.route");

/**
 * Init All routes here
 */
module.exports = (app) => {
  app.use("/api/auth", authRoutes);
  app.use("/api/blog", blogRoutes);
};
