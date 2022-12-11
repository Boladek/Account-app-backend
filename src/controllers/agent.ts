import { NextFunction, Request, Response } from "express";
import AgentModel from "../database/models/agent";
import Agent from "../interfaces/agent";
import * as agentValidation from "../validations/agentValidation";
import * as RESPONSES from "../utils/constants";

class AgentController {
  getAllAgents = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const agents: Agent[] = await AgentModel.find();
        return res.render("agents", {agents})
        // res.status(200).json({
        //   message: RESPONSES.API_RESPONSE_STATUS.SUCCESS,
        //   data: agents,
        // });
    } catch (error) {
        next(error)
    }
  };

  createAgent = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error, value } = agentValidation.createAgentValidation(req.body);
      if (error?.details[0].message) {
        return res.status(422).send(error?.details[0].message);
      }
      const agent : Agent = await AgentModel.create({
        ...value,
        balance: 0,
      });
      res.status(201).json({
        message: RESPONSES.API_RESPONSE_STATUS.SUCCESS,
        code: 201,
      });
    } catch (error) {
        next(error)
    }
  };

  getAgent = async (req: Request, res: Response) => {
    try {
      const agent: Agent = await AgentModel.findById(req.params.id);
      if (!agent) return res.status(404).send("User not found");
      res.status(200).json({
        message: RESPONSES.API_RESPONSE_STATUS.SUCCESS,
        data: agent,
      });
    } catch (error: any) {
      res.send(error.message);
    }
  };

  deleteAgent = async (req: Request, res: Response) => {
    try{
      const agent: Agent = await AgentModel.findByIdAndDelete(req.params.id);
      if (!agent) return res.status(404).send("Agent not found");
      res.status(200).send("Successfully deleted Agent");
    } catch (error: any) {
      res.send(error.message);
    }
  };
}

export default AgentController;
