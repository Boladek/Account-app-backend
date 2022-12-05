import Joi from "joi";
import Agent from "../interfaces/agent";

export const createAgentValidation = (body: Agent) => {
  const schema = Joi.object().keys({
    user_name: Joi.string().min(2).max(30).required(),
    phone_number: Joi.string().min(9).max(30).required(),
    location: Joi.string().min(2).max(30).required(),
    balance: Joi.number().required(),
    user_id: Joi.string().required(),
    terminals: Joi.array().items(Joi.string()).required(),
  });
  return schema.validate(body);
};

// export const LoginValidation = (body: User) => {
//   const schema = Joi.object().keys({
//     user_name: Joi.string().max(30).required(),
//     password: Joi.string().required(),
//   });
//   return schema.validate(body);
// };

// export const updateValidation = (body: User) => {
//   const schema = Joi.object().keys({
//     first_name: Joi.string().min(2).max(30),
//     last_name: Joi.string().min(2).max(30),
//     user_name: Joi.string().min(2).max(30),
//     email: Joi.string().email().min(9).max(30),
//     phone_number: Joi.string().min(9).max(30),
//     password: Joi.string()
//   });
//   return schema.validate(body);
// };
