import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    overview: {
      type: String,
    },
    poster_path: {
      type: String,
    },
    backdrop_path: {
      type: String,
    },
    release_date: {
      type: String,
    },
    orginal_language: {
      type: String,
    },
    tagline: {
      type: String,
    },
    genres: {
      id: {
        type: String,
      },
      name: {
        type: String,
      },
    },
    cast: [
      {
        id: {
          type: Number,
        },
        name: {
          type: String,
        },
        character: {
          type: String,
        },
        profie_path: {
          type: String,
        },
      },
    ],
    vote_average: {
      type: Number,
    },
    runtime: {
      type: Number,
    },
    trailerUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

const Movie = mongoose.model("MOvie", movieSchema);

export default Movie;
