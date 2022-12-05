import { NextFunction, Request, Response } from "express";
import UserModel from "../database/models/user";
import bcrypt from "bcrypt";
import * as userValidators from "../validations/userValidation";
import User from "../interfaces/user";
import jwt from "jsonwebtoken";
import * as RESPONSES from "../utils/constants";

class UserController {
  getAllUsers = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const users: User[] = await UserModel.find();
      res.status(200).json({
        message: RESPONSES.API_RESPONSE_STATUS.SUCCESS,
        data: users,
      });
    } catch (error) {
      next(error);
    }
  };

  createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error, value } = userValidators.signUpValidation(req.body);
      if (error?.details[0].message) {
        return res.status(422).send(error?.details[0].message);
      }
      const { password } = value;
      const hash = await bcrypt.hash(password, 8);
      const user: User = await UserModel.create({
        ...value,
        password: hash,
        account_number: value.phone,
      });
      res.status(200).json({
        message: RESPONSES.USER_RESPONSE_MESSAGE.CREATED,
        data: user,
      });
    } catch (error: any) {
      next(error);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.method === "GET") {
        return res.status(200).render("home");
      }
      const { error, value } = userValidators.LoginValidation(req.body);
      if (error?.details[0].message) {
        return res.status(422).send(error?.details[0].message);
      }
      const user: User = await UserModel.findOne({
        user_name: value.user_name,
      });
      if (!user) {
        res.status(401).json({
          message: "Invalid Credentials",
        });
      }
      const verifyPassword = await bcrypt.compare(
        value.password,
        user.password
      );
      if (!verifyPassword) {
        res.status(401).json({
          message: "Invalid Credentials",
        });
      }
      const token = jwt.sign({ email: value.email }, process.env.JWT_SECRET, {
        expiresIn: process.env.EXPIRES_IN,
      });
      res.cookie("token", token);
      res.cookie("user", user);
      res.status(201).json({
        message: RESPONSES.API_RESPONSE_STATUS.SUCCESS,
        code: 201,
      });
    } catch (error) {
      next(error);
    }
  };

  getUser = async (req: Request, res: Response) => {
    try {
      const user: User = await UserModel.findById(req.params.id);
      if (!user) return res.status(404).send("User not found");
      res.status(200).json({
        message: RESPONSES.API_RESPONSE_STATUS.SUCCESS,
        data: user,
      });
    } catch (error: any) {
      res.send(error.message);
    }
  };

  showDashboard = async (req: Request, res: Response) => {
    return res.render("dashboard", { user: req.cookies.user });
  }

  //   deleteUser = async (req: Request, res: Response) => {
  //     try{
  //       const user = await UserModel.findByIdAndDelete(req.params.id);
  //       if (!user) return res.status(404).send("User not found");
  //       res.status(200).send("Successfully deleted user");
  //     } catch (error: any) {
  //       res.send(error.message);
  //     }
  //   };

  //   updateUser = async (req: Request, res: Response) => {
  //     try{
  //       const { error, value } = userValidators.updateValidation(req.body);
  //       const user = await UserModel.findByIdAndUpdate(req.params.id, value, {new: true})
  //       res.send(user);
  //     } catch (error) {

  //     }
  //   };
}

export default UserController;
