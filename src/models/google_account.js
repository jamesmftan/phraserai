import mongoose, { Schema } from "mongoose";

const newGoogleUserSchema = new Schema({
  image: String,
  name: String,
  email: String,
});

const GoogleUsers =
  mongoose.models.GoogleUsers ||
  mongoose.model("GoogleUsers", newGoogleUserSchema);

export default GoogleUsers;
