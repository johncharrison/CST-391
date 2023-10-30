// import express and the Types Request and Response
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import statusRouter from "./statuses/statuses.routes";
import logger from "./middleware/logger.middleware";
import cors from "cors";
import helmet from "helmet";

dotenv.config();
// initialize the express application
const app = express();

// define the port on which we want the application to run
const port = 5000;

if (process.env.NODE_ENV == "development") {
  app.use(logger);
  console.log(process.env.GREETING + " in dev mode.");
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use("/status", statusRouter);
// define an endpoint that the server will listen for connections to
app.get("/", (req: Request, res: Response) => {
  // when a GET request is received at this endpoint, issue this response
  res.send("Hello World from TypeScript!");
});

// tell the server to listen for connections on this port
app.listen(port, () => {
  // when the program starts and the server is listening, log this statement to the console
  console.log(`Example app listening at http://127.0.0.1:${port}`);
});
