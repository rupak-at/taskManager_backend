import express from "express";
import cors from "cors";
import connectDB from "./db/connection.js";

import taskRoute from "./router/taskRoute.js";
const port = process.env.PORT 

const app = express();

app.use(cors());
app.use(express.json());

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

});

app.use("/api", taskRoute);
