import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.MONGOOSE_CONNECTION_URL,
      {
        dbName: "quickso",
      }
    );
    console.log(`MongoDb connected : ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error:${error.message}`);
    process.exit(1);
  }
};

/// new one --> connection events

mongoose.connection.on("connected", () => {
  console.log("mongoose connected to DB");
});

mongoose.connection.on("error", (e) => {
  console.error(`mongoose connection error : ${e}`);
});

mongoose.connection.on("disconnect", () => {
  console.log(`mongoose disconnected from db`);
});

export default connectDB;
