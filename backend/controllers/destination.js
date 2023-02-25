import Destination from "../models/Destination.js";

export const createDestination = async (req, res, next) => {
  const newDestination = new Destination(req.body);

  try {
    const savedDestination = await newDestination.save();
    res.status(200).json(savedDestination);
  } catch (err) {
    next(err);
  }
};
export const updateDestination = async (req, res, next) => {
  try {
    const updatedDestination = await Destination.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedDestination);
  } catch (err) {
    next(err);
  }
};
export const deleteDestination = async (req, res, next) => {
  try {
    await Destination.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getDestination = async (req, res, next) => {
  try {
    const destination = await Destination.findById(req.params.id);
    res.status(200).json(destination);
  } catch (err) {
    next(err);
  }
};
export const getDestinations = async (req, res, next) => {
  try {
    const destinations = await Destination.find();
    res.status(200).json(destinations);
  } catch (err) {
    next(err);
  }
};
