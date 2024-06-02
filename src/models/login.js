import mongoose, { Schema } from "mongoose";

const existingUserSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
});

const Users =
  mongoose.models.Users || mongoose.model("Users", existingUserSchema);

export default Users;
