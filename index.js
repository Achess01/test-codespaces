import express from "express";
import cors from "cors";

class Server {
  constructor() {
    this._app = express();
    this._port = 3000;
    this._host = "localhost";
    this.initMiddlewares();
    this.initRoutes();
  }

  initMiddlewares() {
    this._app.use(cors());
    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: true }));
  }

  initRoutes() {
    this._app.use("/", (req, res) => {
      res.send("Hello World");
    });
  }

  start() {
    this._app.listen(this._port, () => {
      console.log(`Server running on http://${this._host}:${this._port}`);
    });
  }
}

const server = new Server();
server.start();
