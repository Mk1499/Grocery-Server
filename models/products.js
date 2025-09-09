import mongoose from "mongoose";
import ModelNames from "./ModelNames.js";

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    imgURL: { type: String },
    description: { type: String },
    inStock: { type: Boolean, default: true },
    category: {
      type: Schema.Types.ObjectId,
      ref: ModelNames.Category,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(ModelNames.Product, productSchema);
