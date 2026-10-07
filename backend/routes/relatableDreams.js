import express from "express";
import { relatableDreams } from "../controller/relatableDreams.controller.js";

const relatableDreamsRouter = express.Router();

relatableDreamsRouter.get("/", relatableDreams);

export { relatableDreamsRouter };
