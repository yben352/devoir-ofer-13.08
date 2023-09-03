
import express, { json } from "express";
import { mainRouter } from "./routers/mainRoute.js";
import { config} from "dotenv"
config()


const appExpress = express();
console.log(process.env.mongoDB_url);
appExpress.use(json());
appExpress.use(mainRouter);
const port = 5200;
appExpress.listen(port, () => {
    console.log("i listen port " + port);
})

