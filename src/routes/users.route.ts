import express from "express";
import {
  getAllUsers,
  deleteUser,
  updateUser,
} from "../controller/users.controller";
import { isAuthenticated } from "../middlewares/index";

const router = express.Router();

router.get("/users", isAuthenticated, getAllUsers);
router.delete("/users/:id", isAuthenticated, deleteUser);
router.put("/users/:id", isAuthenticated, updateUser);

export default router;
