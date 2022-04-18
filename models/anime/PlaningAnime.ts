//* IMPORTS
import mongoose from "mongoose";

//! SCHEMA
const PlaningAnimeSchema = new mongoose.Schema({
  titleEng: {
    type: String,
    required: [true, "Provide english title"],
    trim: true,
  },
  titleJap: {
    type: String,
    required: [true, "Provide Japanese Title"],
    trim: true,
  },
  groupName: {
    type: String,
    required: [true, "Provide Group Name"],
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

export default mongoose.models.Planing_Anime ||
  mongoose.model("Planing_Anime", PlaningAnimeSchema);
