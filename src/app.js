
import express, { json } from "express";
import { mainRouter } from "./routers/mainRoute.js";
import { config} from "dotenv"
import { connectToDb } from "./db/connect.js";
config()

connectToDb();
const appExpress = express();

appExpress.use(json());
appExpress.use(mainRouter);
const port = 5200;
appExpress.listen(port, () => {
    console.log("i listen port " + port);
})

