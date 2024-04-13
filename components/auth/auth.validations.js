const { isEmpty } = require("../../utils/validator");
const { createValidationResponse } = require("../../utils/helpers");

class AuthenticationValidator {
  /**
   * @description Validate Sign in
   */
  signIn(req, res, next) {
    const errors = {};
    const { email, password } = req.body;

    if (isEmpty(email)) {
      errors.email = "Email is required";
    }
    if (isEmpty(password)) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length > 0) {
      createValidationResponse(res, errors);
    } else {
      next();
    }
  }

  /**
   * @description Validate Sign in
   */
  signUp(req, res, next) {
    const errors = {};
    const { firstName, lastName, email, phoneNo, password, address } = req.body;
    if (isEmpty(firstName)) {
      errors.firstName = "First Name is required";
    } else if (isEmpty(lastName)) {
      errors.lastName = "Last Name is required";
    } else if (isEmpty(email)) {
      errors.email = "Email is required";
    } else if (isEmpty(password)) {
      errors.password = "Password is required";
    }
    if (Object.keys(errors).length > 0) {
      createValidationResponse(res, errors);
    } else {
      next();
    }
  }

  /**
   * @description Validate forgot Password
   */
  forgotPassword(req, res, next) {
    const errors = {};
    const { email } = req.body;

    if (isEmpty(email)) {
      errors.email = "Email is required";
    }

    if (Object.keys(errors).length > 0) {
      createValidationResponse(res, errors);
    } else {
      next();
    }
  }

  /**
   * @description Validate otp Verify
   */
  otpVerify(req, res, next) {
    const errors = {};
    const { email, otp } = req.body;

    if (isEmpty(email)) {
      errors.email = "Email is required";
    } else if (isEmpty(otp)) {
      errors.otp = "otp is required";
    }

    if (Object.keys(errors).length > 0) {
      createValidationResponse(res, errors);
    } else {
      next();
    }
  }

  /**
   * @description Validate reset Password
   */
  resetPassword(req, res, next) {
    const errors = {};
    const { email, newPassword } = req.body;

    if (isEmpty(email)) {
      errors.email = "email is required";
    } else if (isEmpty(newPassword)) {
      errors.newPassword = "New password is required";
    }

    if (Object.keys(errors).length > 0) {
      createValidationResponse(res, errors);
    } else {
      next();
    }
  }
}

const validationObj = new AuthenticationValidator();
module.exports = validationObj;
