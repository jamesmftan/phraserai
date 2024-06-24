import mongoose, { Schema } from "mongoose";

const interactionSchema = new Schema({
  interaction_id: { type: String, required: true, unique: true },
});

const Interactions =
  mongoose.models.Interactions ||
  mongoose.model("Interactions", interactionSchema);

export default Interactions;
