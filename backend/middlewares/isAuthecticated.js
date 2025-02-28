
import jwt from "jsonwebtoken"
import User from "../models/user.schema.js";
export const isAuthenticated = async (req,res,next) => {
    try {
        const accessToken = req.cookies["accessToken"]

        if (!accessToken) return res.status(400).json({ success: false, message: "Token must be provided !" })
          
        const decoded = jwt.verify(accessToken, process.env.SECRET_ACCESS_TOKEN);

      if (!decoded) return res.status(400).json({ success: false, message: "Token Expired Please Login " })
       
        const user = await User.findById(decoded._id).select('-password -refreshToken');

        if(!user) return res.status(400).json({ success: false, message: "Invalid User" })
        req.user = user;
        next()
    } catch (error) {
        
        return res.status(500).json({message:"Token expired",isTokenExpired:true,success:false,error})
    }
}