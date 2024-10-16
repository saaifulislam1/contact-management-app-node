const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  // Grab the access token from the headers, not the body
  let authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    // Extract token from the Bearer scheme
    token = authHeader.split(" ")[1];
    // Verify token with the secret key
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User is not authorized");
      }
      // Attach the decoded user to the request object
      req.user = decoded.user;
      next();
    });
    if (!token) {
      res.status(401);
      throw new Error("User is not authorized or token has expired");
    }
  } else {
    res.status(401);
    throw new Error("User is not authorized or token has expired");
  }
});

module.exports = validateToken;
