import mongoose from "mongoose";

const truthSchema = new mongoose.Schema(
  {
    claim: String,
    verdict: String,
    confidence: String,
    explanation: String,
    sources: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

export default mongoose.model("Truth", truthSchema);
