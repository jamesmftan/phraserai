import mongoose, { Schema } from "mongoose";

const googleUserSchema = new Schema({
  image: String,
  name: String,
  email: String,
});

const GoogleUsers =
  mongoose.models.GoogleUsers ||
  mongoose.model("GoogleUsers", googleUserSchema);

export default GoogleUsers;
