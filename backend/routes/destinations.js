import express from "express";
import {
  createDestination,
  deleteDestination,
  getDestination,
  getDestinations,
  updateDestination,
} from "../controllers/destination.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", createDestination);
// UPDATE
router.put("/:id", verifyAdmin, updateDestination);
// DELETE
router.delete("/:id", verifyAdmin, deleteDestination);
// GET
router.get("/:id", getDestination);
// GET ALL
router.get("/", getDestinations);

export default router;
