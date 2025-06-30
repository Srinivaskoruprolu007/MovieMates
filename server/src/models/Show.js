import mongoose from "mongoose";

const showSchema = new mongoose.Schema(
  {
    movie: {
      type: String,
      ref: "Movie",
      required: true,
    },
    showDataTime: {
      type: Date,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    occupiedSeats: {
      type: Object,
      defualt: {},
      minimize: false, // ensure empty object is saved
    },
  },
  { timestamps: true }
);

const Show = mongoose.model("Show", showSchema);

export default Show;
