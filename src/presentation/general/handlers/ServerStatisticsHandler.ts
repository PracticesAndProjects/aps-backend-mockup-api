import { IExpressRouteHandler } from "../../../domain/usecases/ExpressRouteHandler";
// @ts-ignore
import ServerStatistics from "../common/ServerStatistics.json";

class ServerStatisticsHandler implements IExpressRouteHandler {
  async handle() {
    try {
      return {
        statusCode: 200,
        body: ServerStatistics,
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
