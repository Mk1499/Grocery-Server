import mongoose from "mongoose";
import ModelNames from "./ModelNames.js";

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(ModelNames.User, schema);
