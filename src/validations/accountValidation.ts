import Joi from "joi";
import Account from "../interfaces/account";

export const createAccountValidation = (body: Account) => {
  const schema = Joi.object().keys({
    user_name: Joi.string().min(2).max(30).required(),
    balance: Joi.number().required(),
    agent_id: Joi.string().required(),
    tickets: Joi.number().required(),
    cash: Joi.number().required(),
  });
  return schema.validate(body);
};

export const updateAccountValidation = (body: Account) => {
  const schema = Joi.object().keys({
    agent_id: Joi.string(),
    tickets: Joi.number(),
    cash: Joi.number(),
    balance: Joi.number(),
  });
  return schema.validate(body);
};
