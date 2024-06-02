import mongoose, { Schema } from "mongoose";

const newUserSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
});

const Users = mongoose.models.Users || mongoose.model("Users", newUserSchema);

export default Users;
