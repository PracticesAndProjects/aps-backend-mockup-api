import { Request, Response } from "express";
import {} from "../../application/adapters/ExpressRouteAdapter";

interface IHandlerResponse {
  statusCode: number;
  body: any;
}

interface IExpressRouteHandler {
  handle(payload: any, headers: Request["headers"]): Promise<IHandlerResponse>;
}

export { IExpressRouteHandler };
