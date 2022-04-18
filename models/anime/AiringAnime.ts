//* IMPORTS
import mongoose from "mongoose";

//! SCHEMA
const AiringAnimeSchema = new mongoose.Schema({
  titleEng: {
    type: String,
    required: [true, "Provide english title"],
    trim: true,
  },
  titleJap: {
    type: String,
    required: [true, "Provide japanese title"],
    trim: true,
  },
  groupName: {
    type: String,
    required: [true, "Provide group name"],
    trim: true,
  },
  type: {
    type: String,
    required: [true, "Provide Anime Type"],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  banner: {
    type: String,
    trim: true,
  },
  thumnail: {
    type: String,
    trim: true,
  },
  logo: {
    type: String,
    trim: true,
  },
  trailer: {
    type: String,
    trim: true,
  },
  genres: {
    type: [String],
    trim: true,
  },
  status: {
    type: String,
    trim: true,
  },
  episodes: {
    type: [String],
    default: [],
  },
  episodesCount: {
    type: Number,
    trim: true,
  },
  released: {
    type: String,
    trim: true,
  },
  link: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.models.Airing_Anime ||
  mongoose.model("Airing_Anime", AiringAnimeSchema);
