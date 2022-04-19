import { Request, Response } from "express";
import { IExpressRouteHandler } from "../../domain/usecases/ExpressRouteHandler";

const adaptRoute =
  (handler: IExpressRouteHandler) =>
  async (request: Request, response: Response) => {
    const payload = {
      ...(request.body || {}),
      ...(request.params || {}),
      ...(request.query || {}),
      ...(request.headers || {}),
    };

    try {
      const { statusCode, body } = await handler.handle(payload, {
        ...(request.headers || {}),
      });
      response.status(statusCode).json(body);
    } catch (error) {
      response.status(500).json({
        message: "Internal server error!",
      });
    }
  };

export { adaptRoute };
