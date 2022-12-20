import express from "express";
import { initializeDbConnection } from "./db";
import { routes } from "./routes";
import { authMiddleware } from "./utils/authMiddleware";
import { protectedRoutes } from "./protectedRoutes";
import cors from "cors";

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors({ origin: "http://127.0.0.1:5173" }));
app.use(express.json());

app.get("/ping", (req, res) => {
  console.log(req.get("origin"), req.ip);
  res.send("PONG back at you... 😊");
});

routes.map((route) => app[route.method](route.path, route.handler));

app.use("/", authMiddleware);

protectedRoutes.map((route) => app[route.method](route.path, route.handler));

initializeDbConnection().then(() => {
  app.listen(PORT, () =>
    console.log(`MERN server is listening on port ${PORT}...`)
  );
});
