import { Router } from "express";
const userRouter = Router()

userRouter
.post("/register",Register)
.post("/login",Login)