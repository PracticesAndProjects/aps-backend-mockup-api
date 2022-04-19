import { IExpressRouteHandler } from "../../../domain/usecases/ExpressRouteHandler";

class ServerStatisticsHandler implements IExpressRouteHandler {
  async handle() {
    try {
      return {
        statusCode: 200,
        body: {
          name: "Baldur API",
          description: "Mockup Data Fetching for RecyclePlace development.",
          version: "1.0.0",
        },
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: err.stack,
      };
    }
  }
}

export { ServerStatisticsHandler };
