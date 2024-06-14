import mongoose, { Schema } from "mongoose";

const interactionSchema = new Schema(
  {
    interaction_id: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    raw_prompt: { type: String, required: true },
    prompt: { type: String, required: true },
    //generated: { type: String, required: true },
  },
  { timestamps: true }
);

const Interactions =
  mongoose.models.Interactions ||
  mongoose.model("Interactions", interactionSchema);

export default Interactions;
