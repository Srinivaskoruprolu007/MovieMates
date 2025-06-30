import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "./src/database/connectDb.js";
import ClerkExpressRequireAuth from "@clerk/express";
import 
const app = express();
app.use(cors());
app.use(express.json());
app.use(ClerkExpressRequireAuth());

// connection to database
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("server is live");
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is now running on port : ${port}`);
});
