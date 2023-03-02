import express from "express";
import {
  createFly,
  deleteFly,
  getFlies,
  getFly,
  updateFly,
} from "../controllers/fly.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/:destinationid", verifyAdmin, createFly);
// UPDATE
router.put("/:id", updateFly);
// DELETE
router.delete("/:id/:destinationid", verifyAdmin, deleteFly);
// GET
router.get("/:id", getFly);
// GET ALL
router.get("/", getFlies);

export default router;
