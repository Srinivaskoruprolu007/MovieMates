import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: {
      // clerks'user Id as primarykey
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

const User = mongoose.model("User", userSchema);

export default User;
