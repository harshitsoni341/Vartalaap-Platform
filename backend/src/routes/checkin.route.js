
import express from "express";
import { getCheckIns, postCheckIn } from "../controllers/checkin.controller.js";

const router = express.Router();

router.get("/:userId", getCheckIns);
router.post("/:userId", postCheckIn);

export default router;
