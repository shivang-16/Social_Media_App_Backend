import express from "express";

import {
  register,
  login,
  updateUser,
  logout,
  deleteUser,
  getAllUsers,
  getMyProfile,
  verifyOtp,
  forgetPassword,
  changePassword,
  getUserbyID,
  getMyPosts,
  getUserPosts,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/verify", verifyOtp);
router.post("/login", login);
router.post("/forgetPassword", isAuthenticated, forgetPassword);
router.post("/changePassword", isAuthenticated, changePassword);
router.get("/myProfile", isAuthenticated, getMyProfile);
router.post("/logout", isAuthenticated, logout);
router.patch("/update", isAuthenticated, updateUser);
router.delete("/delete", isAuthenticated, deleteUser);
router.get("/all", getAllUsers);
router.post("/:id", getUserbyID);
router.route("/me/posts").get(isAuthenticated, getMyPosts);
router.route("/posts/:id").get(isAuthenticated, getUserPosts);

export default router;
