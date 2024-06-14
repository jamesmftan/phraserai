import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
});

const Users = mongoose.models.Users || mongoose.model("Users", userSchema);

export default Users;
