import mongoose from "mongoose";
import ModelNames from "./ModelNames.js";

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: { type: String, required: true },
    imgURL: { type: String },
    bgColor: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(ModelNames.Category, schema);
