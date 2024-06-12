import mongoose, { Schema } from "mongoose";

const interactionSchema = new Schema(
  {
    interaction_id: String,
    email: String,
    raw_prompt: String,
    prompt: String,
    generated: String,
  },
  { timestamps: true }
);

const Interactions =
  mongoose.models.Interactions ||
  mongoose.model("Interactions", interactionSchema);

export default Interactions;
