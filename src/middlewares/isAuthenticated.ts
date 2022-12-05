import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.cookies.token;
    console.log(authorizationHeader);
    if (authorizationHeader) {
      const token = authorizationHeader;
      const result = jwt.verify(token, process.env.JWT_SECRET, {});
      req.user = result;
      next();
    } else {
      return res.redirect("/users/login")
      // res.status(401).send("No authorization headers");
    }
  } catch (error) {
    next(error);
  }
};
