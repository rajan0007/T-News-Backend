const express = require("express");
const router = express.Router();
const AuthController = require("./auth.controller");
const jwtVerify = require("../../middleware/jwtVerify");

router.get("/token-verify", jwtVerify, (req, res) => {
  AuthController.tokenVerify(req, res);
});

//Admin

router.post("/loginAdmin", (req, res) => {
  AuthController.loginAdmin(req, res);
});

router.post("/deleteAdmin", (req, res) => {
  AuthController.deleteAdmin(req, res);
});

router.patch("/updateAdminProfile", (req, res) => {
  AuthController.updateAdminProfile(req, res);
});

router.get("/all-admin", (req, res) => {
  AuthController.AllAdmin(req, res);
});
router.post("/addAdmin", (req, res) => {
  AuthController.addAdmin(req, res);
});
module.exports = router;
