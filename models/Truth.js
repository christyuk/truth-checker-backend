import mongoose from "mongoose";

const TruthSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

export default mongoose.model("Truth", TruthSchema);
