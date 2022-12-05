import paths from "./path";
import {Router} from "express";
import AgentController from "../../controllers/agent";
import isAuthenticated from "../../middlewares/isAuthenticated";

export default (router: Router) => {
  const agent = new AgentController();

  router.post(paths.CREATE_AGENT, isAuthenticated, agent.createAgent);
  router.get(paths.GET_ALL_AGENTS, isAuthenticated, agent.getAllAgents);
  router.get(paths.GET_AGENT, isAuthenticated, agent.getAgent);
//   router.put(paths.UPDATE, isAuthenticated, user.updateUser);
  router.delete(paths.DELETE, isAuthenticated, agent.deleteAgent);
};
