import mongoose from "mongoose";
const { Schema } = mongoose;

const FlySchema = new Schema(
  {
    departureTime: {
      type: String,
      required: true,
    },
    landingTime: {
      type: String,
      required: true,
    },
    departureCity: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    seats: [{ number: Number, unavailableSeats: { type: [Date] } }],
  },
  { timestamps: true }
);

export default mongoose.model("Fly", FlySchema);
