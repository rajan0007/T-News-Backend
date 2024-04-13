const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    // console.log("req :::", req);
    console.log('req.header("token")::: ', req.header("token"));
    const jwtToken = req.header("token");
    if (!jwtToken) {
      return res.json({ message: "Not Authorize." });
    }
  } catch (err) {
    return res.json({ isValid: false, message: err.message });
  }

  next();
};
