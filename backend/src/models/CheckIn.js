import mongoose from "mongoose";

const checkInSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  dates: {
    type: [String], // Array of date strings like "2025-05-26"
    default: [],
  },
});

const CheckIn = mongoose.model("CheckIn", checkInSchema);
export default CheckIn;
