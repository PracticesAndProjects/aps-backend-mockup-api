import { IExpressRouteHandler } from "../../../domain/usecases/ExpressRouteHandler";
import { FetchUsersService } from "../../../implementation/user/services/";

class FetchUsersHandler implements IExpressRouteHandler {
  constructor(private readonly fetchUsersUseCase: FetchUsersService) {}

  async handle() {
    try {
      const users = await this.fetchUsersUseCase.execute();

      return {
        statusCode: 200,
        body: users,
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: err.stack,
      };
    }
  }
}

export { FetchUsersHandler };
