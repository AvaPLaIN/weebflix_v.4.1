import mongoose from "mongoose";

const AnimeSchema = new mongoose.Schema({
  titleEng: {
    type: String,
    required: [true, "TitleEng is required"],
    trim: true,
  },
  titleJpn: {
    type: String,
    required: [true, "TitleJpn is required"],
    trim: true,
  },
  groupName: {
    type: String,
    required: [true, "GroupName is required"],
    trim: true,
  },
  type: {
    type: String,
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
  },
  status: {
    type: String,
    trim: true,
  },
  episodes: {
    type: [String],
  },
  episodesCount: {
    type: Number,
    trim: true,
  },
  released: {
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

export default mongoose.models.Anime || mongoose.model("Anime", AnimeSchema);
