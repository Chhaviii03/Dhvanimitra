const express = require("express");
const router = express.Router();
const messageControllers = require("../controllers/message-controller");
const menteeMiddleware = require("../middlewares/mentee-middleware");
const mentorMiddleware = require("../middlewares/mentor-middleware");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Unauthorized, Token not provided" });
  }
  menteeMiddleware(req, res, () => {
    if (req.user) {
      req.role = "Mentee";
      return next();
    }
    mentorMiddleware(req, res, () => {
      if (req.user) {
        req.role = "Mentor";
        return next();
      }
      return res.status(401).json({ message: "Unauthorized. Invalid token." });
    });
  });
};

router.post("/send-message",  messageControllers.sendMessage);
router.get("/messages/:userId1/:userId2",  messageControllers.getMessages);
router.delete("/delete-message/:messageId",  messageControllers.deleteMessage);

module.exports = router;