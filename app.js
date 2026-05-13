import express from "express";
import pdfRoute from "./routes/fileRoute.js";

const app = express();
import fileRoute from "./routes/fileRoute.js";

// Middleware
app.use(express.json());

//Routes
app.use("/", fileRoute);

export default app;
