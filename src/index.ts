import express, { Response, Request } from "express";
import bodyParser from "body-parser";
import logger from "./utils/logger";
import routes from "./routes";
import cors from "cors";
import "dotenv/config";
import { connect } from "./database/index";
import ErroHandler from "./utils/ErrorHandle";
import AccountController from "./controllers/account";
import path from "path";
import cookieParser from "cookie-parser";
// import ejs from "ejs";

// const account = new AccountController();

const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(process.cwd(), "./public")));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
connect();
// app.use(express.bodyParser());
// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", routes);
app.use((error: any, _: Request, responseWriter: Response, __: any) => {
  ErroHandler(error, responseWriter);
});

app.listen(process.env.PORT, () => {
  logger.info(`listening on port ${process.env.PORT}`);

  // cron.schedule("0 0 * * *", () => {
  //   logger.info(`cron job is running`);
  //   account.createAllAccounts();
  // });
});
