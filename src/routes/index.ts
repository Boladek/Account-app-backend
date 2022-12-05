import {Router} from "express"
import userRoute from './usersRoute';
import agentRoute from "./agentsRoute";
import accountRoute from "./accountsRoute";

const router: Router = Router();

accountRoute(router);
userRoute(router);
agentRoute(router);

export default router;