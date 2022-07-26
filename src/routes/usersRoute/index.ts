import paths from "./path";
import { Router } from "express";
import UserController from "../../controllers/user";
import isAuthenticated from "../../middlewares/isAuthenticated";

export default (router: Router) => {
  const user = new UserController();

  router.post(paths.SIGN_UP, user.createUser);
  router.get(paths.SIGN_UP, user.createUser);
  router.get(paths.LOGIN, user.login);
  router.get(paths.BASE_ROUTE, user.login);
  router.post(paths.LOGIN, user.login);
  router.get(paths.GET_ALL_USERS, isAuthenticated, user.getAllUsers);
  router.get(paths.GET_USER, isAuthenticated, user.getUser);
  router.get(paths.GET_USER, isAuthenticated, user.getUser);
  router.get(paths.DASHBOARD, isAuthenticated, user.showDashboard);
  router.get(paths.SUMMARY, isAuthenticated, user.showSummary);
  router.get(paths.LOGOUT, isAuthenticated, user.logout);
};
