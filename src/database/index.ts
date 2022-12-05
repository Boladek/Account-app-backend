import mongoose, { ConnectOptions } from "mongoose";
import logger from "../utils/logger";

const { NODE_ENV, TEST__MONGO_CONNECTION_STRING, MONGO_CONNECTION_STRING } =
  process.env;

export const connect = () =>
  mongoose
    .connect(
      NODE_ENV === "test"
        ? TEST__MONGO_CONNECTION_STRING
        : MONGO_CONNECTION_STRING,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    )
    .then(() => logger.info("Connection established"))
    .catch((error) => logger.error("Connection" + error.message));
