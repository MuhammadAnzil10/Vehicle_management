const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(400)
      .json({ status: false, error: "Invalid Credentials" });
  }
  try {
    const { id } = jwt.verify(token, process.env.TOKEN_SECRET);
    req.userId = id;
    next();
  } catch (error) {
    return res
      .status(400)
      .json({ status: false, error: "Invalid Credentials" });
  }
};

module.exports = authenticate;
