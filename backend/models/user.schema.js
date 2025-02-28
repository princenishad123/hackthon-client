import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { config } from "dotenv";
config()

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        lowercase: true,
        
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
         match: [
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                "Please enter a valid email address",
            ], // Regex validation for email
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
    },

    iAm: {
        type: String,
        requried: true,
        trim:true
    },
        
    role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
    },
    refreshToken: {
        type: String,
        
    }
}, { timestamps: true })

userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.isPasswordMatch = async function(password) {
   return await bcrypt.compare(password,this.password)
}


userSchema.methods.generateAccessToken = async function() {
   return jwt.sign({
        email: this.email,
        name: this.name,
        _id:this._id,
    },
        process.env.SECRET_ACCESS_TOKEN,
        { expiresIn: "2d" }
    )
}
userSchema.methods.generateRefreshToken = async function() {
   return jwt.sign({
        _id:this._id,
    },
        process.env.SECRET_REFRESH_TOKEN,
        { expiresIn:"10d" }
    )
}


const User = mongoose.model("User", userSchema);
export default User;