import mongoose from "mongoose";
const { Schema } = mongoose;

const DestinationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  sale: {
    type: Boolean,
    default: false,
  },
  photo: {
    type: [String],
  },
  flies: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Destination", DestinationSchema);
