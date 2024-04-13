const { createResponse, createError } = require("./../../utils/helpers");

const AdminService = require("../../services/adminService");

class AuthController {
  async loginAdmin(req, res) {
    try {
      const user = await AdminService.loginAdmin(req.body);
      console.log("user::: ", user);
      if (user) {
        createResponse(res, true, "Login successfully...", user);
      } else {
        createResponse(res, false, "Invalid Credentials");
      }
    } catch (e) {
      createError(res, e);
    }
  }
  async AllAdmin(req, res) {
    try {
      const admin = await AdminService.AllAdmin();
      console.log("admin::: ", admin);
      if (admin) {
        createResponse(res, true, "Get Admin successfully...", admin);
      } else {
        createResponse(res, false, "Invalid Credentials");
      }
    } catch (e) {
      createError(res, e);
    }
  }

  async updateAdminProfile(req, res) {
    try {
      const admin = await AdminService.updateAdminProfile(req.body);
      console.log("admin::123: ", admin);
      if (admin) {
        createResponse(res, true, "Update successfully...", admin);
      } else {
        createResponse(res, false, "failed to update");
      }
    } catch (e) {
      createError(res, e);
    }
  }

  async deleteAdmin(req, res) {
    try {
      console.log("req::: ", req.body);
      const admin = await AdminService.deleteAdmin(req.body);
      console.log("admin::: ", admin);
      if (admin) {
        createResponse(res, true, "Admin deleted successfully ..");
      } else {
        createResponse(
          res,
          false,
          "Unable to delete  Admin,please try again.."
        );
      }
    } catch (e) {
      createResponse(res, false, e);
    }
  }
  async tokenVerify(req, res) {
    console.log("req::: ", req);
    try {
      return res.json({ isValid: true });
    } catch (e) {
      console.log("tokenVerify e ---", e.message);
      return res.json({ isValid: false, message: e.message });
    }
  }

  async addAdmin(req, res) {
    try {
      const admin = await AdminService.addAdmin(req.body);
      console.log("admin::: ", admin);
      if (admin) {
        createResponse(res, true, "Admin register successfully ..", admin);
      } else {
        createResponse(
          res,
          false,
          "Unable to create new admin,please try again.."
        );
      }
    } catch (e) {
      createResponse(res, false, e);
    }
  }
  
}

const authController = new AuthController();
module.exports = authController;
