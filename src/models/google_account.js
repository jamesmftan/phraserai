import mongoose, { Schema } from "mongoose";

const googleUserSchema = new Schema(
  {
    image: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const GoogleUsers =
  mongoose.models.GoogleUsers ||
  mongoose.model("GoogleUsers", googleUserSchema);

export default GoogleUsers;
