import mongoose from "mongoose";

const schemeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    default: [],
  },
  benefits: {
    type: String,
    required: true,
  },
  minAge: {
    type: Number,
    required: true,
  },
  maxAge: {
    type: Number,
    required: true,
  },
  maxIncome: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  applyLink: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Scheme = mongoose.model("Scheme", schemeSchema);

export default Scheme;
