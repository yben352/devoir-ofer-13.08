import { Router } from "express";
import { studentsRoute } from "./studentRoute";
export const mainRouter = Router();

mainRouter.use("/students",studentsRoute)
