import Fly from "../models/Fly.js";
import Destination from "../models/Destination.js";
import { createError } from "../utils/error.js";

export const createFly = async (req, res, next) => {
  const destinationId = req.params.destinationid;
  const newFly = new Fly(req.body);

  try {
    const savedFly = await newFly.save();

    try {
      await Destination.findByIdAndUpdate(destinationId, {
        $push: { flies: savedFly._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedFly);
  } catch (err) {
    next(err);
  }
};

export const updateFly = async (req, res, next) => {
  try {
    const updatedFly = await Fly.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedFly);
  } catch (err) {
    next(err);
  }
};
export const deleteFly = async (req, res, next) => {
  const destinationId = req.params.destinationid;

  try {
    await Fly.findByIdAndDelete(req.params.id);

    try {
      await Destination.findByIdAndUpdate(destinationId, {
        $pull: { flies: req.params.id },
      });
    } catch (err) {
      next(err);
    }

    res.status(200).json("Fly has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getFly = async (req, res, next) => {
  try {
    const fly = await Fly.findById(req.params.id);
    res.status(200).json(fly);
  } catch (err) {
    next(err);
  }
};
export const getFlies = async (req, res, next) => {
  try {
    const flies = await Fly.find();
    res.status(200).json(flies);
  } catch (err) {
    next(err);
  }
};
