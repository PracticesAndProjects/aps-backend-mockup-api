import { ServerStatisticsHandler } from "../../../presentation/general/handlers/ServerStatisticsHandler";

const appendGeneralHandler = (handlerName: string) =>
  ({
    ServerStatistics: new ServerStatisticsHandler(),
  }[handlerName]);

export { appendGeneralHandler };
