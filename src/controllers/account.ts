import { NextFunction, Request, Response } from "express";
import * as accountValidation from "../validations/accountValidation";
import AccountModel from "../database/models/account";
import AgentModel from "../database/models/agent";
import * as RESPONSES from "../utils/constants";
import Account from "../interfaces/account";
import Agent from "../interfaces/agent";

class AccountController {
  createAccount = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error, value } = accountValidation.createAccountValidation(
        req.body
      );
      if (error?.details[0].message) {
        return res.status(422).send(error?.details[0].message);
      }
      const ifExistsToday: any = await AccountModel.findOne({
        agent_id: value.agent_id,
        created_at: {
          $gte: new Date(new Date().setHours(0, 0, 0, 0)).toISOString(),
          $lt: new Date().toISOString(),
        },
      });
      if (ifExistsToday) {
        return res.status(200).json({
          message: RESPONSES.API_RESPONSE_STATUS.SUCCESS,
          data: ifExistsToday,
        });
      }
      const account: Account = await AccountModel.create({
        ...value,
      });
      const agent: any = await AgentModel.findOne({ _id: value.agent_id });
    //   await AgentModel.findByIdAndUpdate(
    //     value.agent_id,
    //     { balanace: agent.balance - account.balance },
    //     { new: true }
    //   );
      res.status(201).json({
        message: RESPONSES.API_RESPONSE_STATUS.SUCCESS,
        data: account,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  createAllAccounts = async () => {
    try {
      const agents = await AgentModel.find({});
      const accounts = agents.map((item: Agent) => {
        return {
        user_name : item.user_name,
        balance : item.balance,
        cash : 0,
        tickets: 0,
        agent_id : item._id,
        amount_expected: 0,
        }
      })
      return AccountModel.insertMany(accounts);
    } catch (error) {
      return error
    }
  }

  getTodaysAccount = async (
    _req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const accounts = await AccountModel.find({
        created_at: {
          $gte: new Date(new Date().setHours(0, 0, 0, 0)).toISOString(),
          $lt: new Date().toISOString(),
        },
      });
      res.status(200).json({
        message: RESPONSES.API_RESPONSE_STATUS.SUCCESS,
        data: accounts,
      });
    } catch (error) {
      next(error);
    }
  };

  updateUserAccount = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { error, value } = accountValidation.updateAccountValidation(
        req.body
      );
      if (error?.details[0].message) {
        return res.status(422).send(error?.details[0].message);
      }
      const agent_account = await AccountModel.findOne({
        agent_id: req.body.agent_id,
        created_at: {
          $gte: new Date(new Date().setHours(0, 0, 0, 0)).toISOString(),
          $lt: new Date().toISOString(),
        },
      });
      await AccountModel.findByIdAndUpdate(agent_account._id, value, {
        new: true,
      });
      const agent: any = await AgentModel.findOne({ _id: value.agent_id });
      await AgentModel.findByIdAndUpdate(
        value.agent_id,
        { balanace: agent.balance - value.balance },
        { new: true }
      );
      res.status(200).send("Successfully updated Account");
    } catch (error) {
      next(error);
    }
  };

  getUserAccount = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const accounts: Account[] = await AccountModel.find({
        agent_id: req.params.id,
      });
      res.status(200).json({
        message: RESPONSES.API_RESPONSE_STATUS.SUCCESS,
        data: accounts,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default AccountController;
