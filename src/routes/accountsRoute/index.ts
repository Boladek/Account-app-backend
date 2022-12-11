import paths from "./path";
import { Router } from "express";
import AccountController from "../../controllers/account";
import isAuthenticated from "../../middlewares/isAuthenticated";

export default (router: Router) => {
  const account = new AccountController();

  router.get(
    paths.CREATE_ALL_ACCOUNTS,
    isAuthenticated,
    account.createAllAccounts
  );
  router.post(paths.CREATE_ACCOUNT, isAuthenticated, account.createAccount);
  router.get(
    paths.GET_TODAYS_ACCOUNTS,
    isAuthenticated,
    account.getTodaysAccount
  );
  router.get(paths.GET_USER_ACCOUNTS, isAuthenticated, account.getUserAccount);
  router.post(
    paths.UPDATE_USER_ACCOUNT,
    isAuthenticated,
    account.updateUserAccount
  );
};
