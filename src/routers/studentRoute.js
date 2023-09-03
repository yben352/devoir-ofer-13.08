import { Router } from "express";
import { studentsController } from "../controllers/studentsController";

export const studentsRoute = Router();
studentsRoute.get("/", studentsController);