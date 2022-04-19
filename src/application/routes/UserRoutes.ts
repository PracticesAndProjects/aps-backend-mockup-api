import { Router } from "express";
import { adaptRoute } from "../adapters/ExpressRouteAdapter";
import { appendUserHandler } from "../../application/factories/handlers/";

export default (router: Router) => {
  router.get("/users/:userId", adaptRoute(appendUserHandler("FetchUserById")));
  router.get("/users", adaptRoute(appendUserHandler("FetchUsers")));
};
