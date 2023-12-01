import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";

import db from "./config/db";
import authRoute from "./routes/auth.route";
import userRoute from "./routes/users.route";

dotenv.config({ path: __dirname + "/.env" });

const app = express();

db();

app.use(cors({ credentials: true }));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/api", authRoute);
app.use("/api", userRoute);

app.listen(7000, () => {
  console.log("Listening on port 7000");
});
