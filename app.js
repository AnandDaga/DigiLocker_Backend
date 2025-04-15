import express from "express";
import bodyParser from "body-parser";
import UserRoutes from "./routes/userRoutes.js";
const app = express();

app.use(bodyParser.json()); // this will parser the body and make it available under req.body
app.use('/',UserRoutes); 

export default app;