const Admin = require("../model/Admin");

class AdminService {
  async loginAdmin(body) {
    console.log("body::: ", body);
    const { email, password } = body;

    let admin = await Admin.findOne({
      email: email,
      password: password,
    });

    if (admin) {
      return {
        data: admin.toAdminJSON(),
        role: "Admin",
      };
    }

    console.log("admin::: ", admin);
  }
  async deleteAdmin(body) {
    const { id } = body;
    console.log("adminDelete::::", id);

    try {
      const result = await Admin.deleteOne({
        _id: id,
      });
      return result;
    } catch (e) {
      return e;
    }
  }
  async updateAdminProfile(body) {
    const { email, oldPassword, password } = body;
    try {
      const updateProviderById = await Admin.findOneAndUpdate(
        {
          email: email,
          password: oldPassword,
        },
        {
          $set: {
            password,
          },
        }
      );
      console.log("updateProviderById::: ", updateProviderById);
      if (!updateProviderById) {
        return false;
      } else {
        return true;
      }
      return;
    } catch (e) {
      return err;
    }
  }
  async addAdmin(body) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log("body::: ", body);
        const result = await Admin.findOne({
          email: body.email,
        });
        console.log("result::: ", result);
        if (!result) {
          console.log("true::: ", true);
          // If email is unique and password was provided, submit account
          const addAdmin = new Admin({
            ...body,
          });
          const adminSave = await addAdmin.save();
          if (!adminSave) {
            reject(err2);
            return;
          } else {
            resolve(adminSave);
          }
        } else {
          reject("That email is already in use.");
          return;
        }
      } catch (e) {
        reject(e);
      }
    });
  }
  async AllAdmin(body) {
    let AllAdmin = await Admin.find();
    // console.log("AllUser::: ", AllUser);
    if (AllAdmin) {
      return AllAdmin;
    } else {
      return null;
    }
  }
}
const adminService = new AdminService();
module.exports = adminService;
