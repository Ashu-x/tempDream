import express from "express";
import { recentDream } from "../controller/recentDream.controller.js";

const homepageRouter = express.Router();

homepageRouter.get("/", recentDream);

export { homepageRouter };
