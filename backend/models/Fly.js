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
    price: {
      type: Number,
      required: true,
    },
    seats: [{ number: Number, isHall: Boolean, unavailableSeats: Boolean }],
  },
  { timestamps: true }
);

export default mongoose.model("Fly", FlySchema);
