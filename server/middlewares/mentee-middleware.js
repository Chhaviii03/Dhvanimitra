// const jwt = require("jsonwebtoken");
// const Mentee = require("../models/mentee-model");

// const menteeMiddleware = async (req, res, next) => {
//   const token = req.header("Authorization");

//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized, Token not provided" });
//   }

//   const jwtToken = token.replace("Bearer ", "").trim();
//   try {
//     const isVerified = jwt.verify(jwtToken, process.env.JWT_KEY);
//     const userData = await Mentee.findById(isVerified.userId).select({ password: 0 });

//     if (!userData) {
//       return res.status(401).json({ message: "Unauthorized. User not found." });
//     }
//   // Convert Mongoose document to plain object
//   const tempUser = userData.toObject();
//   tempUser.profilePicture = `http://localhost:8000/api/auth/images/${tempUser.profilePicture}`;
//     req.token = token;
//     req.user = tempUser;
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "Unauthorized. Invalid token." });
//   }
// };

// module.exports = menteeMiddleware;

const jwt = require("jsonwebtoken");
const Mentee = require("../models/mentee-model");

const menteeMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    console.error("No token provided in request");
    return res.status(401).json({ message: "Unauthorized, Token not provided" });
  }

  const jwtToken = token.replace("Bearer ", "").trim();
  try {
    console.log("Verifying token:", jwtToken);
    const isVerified = jwt.verify(jwtToken, process.env.JWT_KEY);
    console.log("Decoded token:", isVerified);

    const userData = await Mentee.findById(isVerified.userId).select({ password: 0 });
    console.log("User data from DB:", userData);

    if (!userData) {
      console.error("User not found for ID:", isVerified.userId);
      return res.status(401).json({ message: "Unauthorized. User not found." });
    }

    const tempUser = userData.toObject();
    tempUser.profilePicture = userData.profilePicture
      ? `http://localhost:8000/api/auth/images/${userData.profilePicture}`
      : null;

    req.token = token;
    req.user = tempUser;
    next();
  } catch (error) {
    console.error("Middleware error:", error.message);
    return res.status(401).json({ message: "Unauthorized. Invalid or expired token.", error: error.message });
  }
};

module.exports = menteeMiddleware;