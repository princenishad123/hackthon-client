import cookieParser from "cookie-parser"
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import connectDB from "../db/db.js";

// Load environment variables
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(express.json({limit:"16kb"}));
app.use(bodyParser.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser())
app.use(
    cors({
        origin: process.env.CLIENT_ORIGIN, // Frontend ka URL
        credentials: true // ✅ Cookies allow karega
    })
);
app.use(helmet());


// app.use(morgan("dev"));


// import all routes here;
import authRoute from "../routes/authRoute.js";
import appointmentRoute from "../routes/appointmentRoute.js";

// route middlewares
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/appointment', appointmentRoute)

// Start Server
app.listen(PORT, () => {
  connectDB();
  console.log(`seriver running on ${PORT}`); 
});

