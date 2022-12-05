import Joi from "joi";
import User from "../interfaces/user";

export const signUpValidation = (body: User) => {
  const schema = Joi.object().keys({
    first_name: Joi.string().min(2).max(30),
    last_name: Joi.string().min(2).max(30),
    user_name: Joi.string().min(2).max(30).required(),
    password: Joi.string().min(4).max(30).required(),
    email: Joi.string().email().min(9).max(30),
    phone_number: Joi.string().min(9).max(30).required(),
    role: Joi.string().required(),
  });
  return schema.validate(body);
};

export const LoginValidation = (body: User) => {
  const schema = Joi.object().keys({
    user_name: Joi.string().max(30).required(),
    password: Joi.string().required(),
  });
  return schema.validate(body);
};

export const updateValidation = (body: User) => {
  const schema = Joi.object().keys({
    first_name: Joi.string().min(2).max(30),
    last_name: Joi.string().min(2).max(30),
    user_name: Joi.string().min(2).max(30),
    email: Joi.string().email().min(9).max(30),
    phone_number: Joi.string().min(9).max(30),
    password: Joi.string()
  });
  return schema.validate(body);
};
