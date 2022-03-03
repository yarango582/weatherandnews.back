import { config } from "dotenv";
import { resolve } from "path";
import { ENV } from "./constants/environments.constant";
import logger from "./utils/logger/logger.util";

logger.info(`Loading environment: ${process.env.NODE_ENV}`);
switch (process.env.NODE_ENV) {
  case ENV.LOCAL:
  default:
    config({
      path: resolve(__dirname, "../.env")
    });
    logger.info(`Loaded environment: ${ENV.LOCAL}`);
    break;
  case ENV.DEVELOPMENT:
  case ENV.STAGING:
  case ENV.PRODUCTION:
    config({
      path: resolve(__dirname, `./${process.env.NODE_ENV}.env`)
    });
    logger.info(`Loaded environment: ${ENV.DEVELOPMENT}`);
    break;
}