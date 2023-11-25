const express = require("express");
const userRouter = require("./users/usersRouter");
const contactUsRouter = require("./contact-us/contactUsRouter");

const authRouter = require("./auth/auth");

const router = express.Router();

router.get("/", (_req, res) =>
  res.status(200).json({ message: "Welcome to Logo executive API" })
);

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/contact-us", contactUsRouter);

module.exports = router;