import User from "../models/user.schema.js";
import Doctor from "../models/doctor.schema.js";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
config();

// This funtion to generate access yoken & Refresh token
const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById({ _id: userId }).select("-password");
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save();

    return { accessToken, refreshToken };
  } catch (error) {
    console.log(
      `something went wrong while generateting access and refresh token ${error}`
    );
  }
};

// Sign-up Controller
export const signConroller = async (req, res) => {
  try {
    const { name, email, password,iAm } = req.body;

    // validation
    if (!email) return res.status(400).json({ message: "Please Enter Email" });
    if (!password)
      return res.status(400).json({ message: "Please Enter Password" });

    // check  user is User exist
    const isUser = await User.findOne({ email });
    if (isUser)
      return res.status(400).json({ message: "Email is already Registered" });

    const userRef = new User({ name, email, password,iAm });
    if (!userRef)
      return res.status(400).json({ message: "Failed To Signing try again" });
    const newUser = await userRef.save();
    
    if (iAm === "doctor") {
      const doctorRef = new Doctor({
        userId: newUser._id,
        name: name,
        contact: {
          email:email,
        }
      })
      
      await doctorRef.save()
    };


    const userWithoutPassword = userRef.toObject();
    delete userWithoutPassword.password;

    return res.status(201).json({
      success: true,
      user: userWithoutPassword,
      message: "Sign-up success",
    });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "Internal Server Error please try again after sometime",
        error,
      });
  }
};

// Login Controller
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email)
      return res
        .status(400)
        .json({
          success: false,
          statusCode: 400,
          message: "Please Enter Email",
        });
    if (!password)
      return res
        .status(400)
        .json({
          success: false,
          statusCode: 400,
          message: "Please Enter Password",
        });

    const isUserExist = await User.findOne({ email });

    if (!isUserExist)
      return res
        .status(400)
        .json({
          success: false,
          statusCode: 400,
          message: "Invalid Email or Password",
        });

    const isPasswordMatched = await isUserExist.isPasswordMatch(password);

    if (!isPasswordMatched)
      return res
        .status(400)
        .json({
          success: false,
          statusCode: 400,
          message: "Invalid Email or Password",
        });

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      isUserExist._id
    );

    isUserExist.password = null;
    isUserExist.refreshToken = null;

    const options = {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 2 * 1000,
      sameSite: "none",
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        status: 200,
        user: isUserExist,
          success: true,
        accessToken,
        message: "User logged In Successfully",
      });
  } catch (error) {
    console.log(`error in login controller ${error}`);
    return res.status(500).json(error);
  }
};

// check authuthenticated User or get loggedIn user
export const checkAuthController = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      isLoggedIn: true,
      user: req.user,
    });
  } catch (error) {
    console.log(`error in checkAuth ${error}`);

    return res.status(400).json({ message: "please login" });
  }
};

// logout controller
export const logoutController = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user._id, { $unset: { refreshToken: 1 } });

    return res
      .status(200)
      .clearCookie("accessToken", {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .clearCookie("refreshToken", {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .json({ status: 200, message: "Logged out successfully" });
  } catch (error) {
    console.log(`error in logout ${error}`);
    return res.status(400).json({
      message: "server error try again",
    });
  }
};

// when access Token is expired then call this controller to generate new access Token
export const refreshTokenController = async (req, res) => {
  try {
    const refreshToken = req.cookies["refreshToken"];

    if (!refreshToken)
      return res
        .status(400)
        .json({ success: false, message: "refresh is missing" });

    const decoded = jwt.verify(refreshToken, process.env.SECRET_REFRESH_TOKEN);

    if (!decoded)
      return res
        .status(400)
        .json({ success: false, message: "Invalid refresh token" });

    const { accessToken:newAccessToken, refreshToken:newRefreshToken } =
      await generateAccessAndRefreshTokens(decoded._id);

    const options = {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 10 * 1000,
      sameSite: "none",
      secure: true,
    };

    res
      .status(200)
      .cookie("accessToken", newAccessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json({ accessToken:newAccessToken, message: "access token Refreshed",success:true });
  } catch (error) {
    console.log(`error in refresh token ${error.message}`);
    return res.status(500).json({ message: "server error", error,success:false });
  }
};


