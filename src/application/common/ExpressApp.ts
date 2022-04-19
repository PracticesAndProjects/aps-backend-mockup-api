import { Request, Response, Router } from "express";
import express from "express";
import generalRoutes from "../routes/GeneralRoutes";

const createExpressApp = async () => {
  const app = express();

  app.use(express.json());

  // eslint-disable-next-line new-cap
  const router: Router = Router();

  // router.get("/", (req: Request, res: Response) => {
  //   res.status(200).json({
  //     name: "Mockup API for RecyclePlace data fetching.",
  //     version: "1.0.0",
  //   });
  // });

  generalRoutes(router);

  app.use(router);

  return app;
};

export { createExpressApp };
