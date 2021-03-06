import morgan from "morgan";
import app from "../app";
import { createConnection } from "typeorm";
import { stream } from "../utils/logger/logger.util";
import { LOG_FORMAT } from "../constants/environments.constant";

export default class Server {
    public port: number;
  
    constructor(port: number) {
      this.port = port;
    }
  
    static init(port: number) {
      return new Server(port);
    }
  
    start(callback: () => void) {
      this.connect()
        .then(() => {
          // application logger setup
          app.use(morgan(LOG_FORMAT, { stream }));
          app.listen(this.port, callback);
        })
        .catch((err) => console.error(err));
    }
  
    private async connect() {
      return await createConnection();
    }
  }