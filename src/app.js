
import express,{json} from "express";
import { mainRouter } from "./routers/mainRoute.js";
const appExpress = express();

appExpress.use(json());
appExpress.use(mainRouter);
const port = 5200;  
appExpress.listen(port,()=>{
    console.log("i listen port "+port);
})

