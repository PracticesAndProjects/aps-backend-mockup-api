import { Router } from "express";
import { adaptRoute } from "../adapters/ExpressRouteAdapter";
import { appendUserHandler } from "../../application/factories/handlers/";

export default (router: Router) => {
  router.get(
    "/api/v1/users/:userId",
    adaptRoute(appendUserHandler("FetchUserById"))
  );

  router.get("/api/v1/users", adaptRoute(appendUserHandler("FetchUsers")));

  router.post(
    "/api/v1/users",
    adaptRoute(appendUserHandler("SingupUserHandler"))
  );
};
