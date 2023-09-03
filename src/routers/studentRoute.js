import { Router } from "express";
import { studentsController } from "../controllers/studentsController.js";

export const studentsRoute = Router();
studentsRoute.get("/", studentsController);