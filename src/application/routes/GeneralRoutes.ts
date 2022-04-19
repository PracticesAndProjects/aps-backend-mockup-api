import { Router } from "express";
import { adaptRoute } from "../adapters/ExpressRouteAdapter";
import { appendGeneralHandler } from "../../application/factories/handlers/GeneralHandler";

export default (router: Router) => {
  router.get("/", adaptRoute(appendGeneralHandler("ServerStatistics")));
};
