const User = require("../models/user.models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


// ================= REGISTER =================
async function registerRoute(req, res) {
  try {
    console.log("BODY:", req.body);

    const { username, email, password, bio, profileImage } = req.body;

    // validation
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    // check existing user
    const isAlreadyExist = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (isAlreadyExist) {
      return res.status(400).json({
        message:
          isAlreadyExist.email === email
            ? "Email already exists"
            : "Username already exists",
      });
    }

    // hash password
    const hash = await bcrypt.hash(password, 10);

    // create user
    const user = await User.create({
      username,
      email,
      password: hash,
      bio,
      profileImage,
    });

    // token
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.JWT,
      { expiresIn: "1d" }
    );

    // cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // true in production (HTTPS)
      sameSite: "lax",
    });

    return res.status(201).json({
      message: "User successfully registered",
      user: {
        username: user.username,
        email: user.email,
        bio: user.bio,
        profileImage: user.profileImage,
      },
    });

  } catch (error) {
    console.error("REGISTER ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
}


// ================= LOGIN =================
async function loginRoutes(req, res) {
  try {
    console.log("BODY:", req.body);

    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    // find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    // token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    return res.status(200).json({
      message: "User logged in successfully",
      user: {
        username: user.username,
        email: user.email,
        bio: user.bio,
        profileImage: user.profileImage,
      },
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
}


module.exports = {
  registerRoute,
  loginRoutes,
};