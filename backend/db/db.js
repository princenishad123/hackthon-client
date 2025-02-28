
    import mongoose from "mongoose";
    import {config} from "dotenv";
config(); // .env file se DB_URI fetch karega

const connectDB = async () => {
  try {
   const conn= await mongoose.connect(process.env.DB_URI);
    console.log(`database connect on ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB Connection Failed!", error);
    process.exit(1);
  }
};

export default connectDB;
    