import { Router } from "express";
import { studentsRoute } from "./studentRoute.js";

export const mainRouter = Router();

mainRouter.use("/students",studentsRoute)
