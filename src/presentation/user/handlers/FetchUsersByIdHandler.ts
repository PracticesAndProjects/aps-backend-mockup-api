import { IExpressRouteHandler } from "../../../domain/usecases/ExpressRouteHandler";
import { FetchUserByIdService } from "../../../implementation/user/services/FetchUserByIdService";

class FetchUserByIdHandler implements IExpressRouteHandler {
  constructor(private readonly fetchUserByIdUseCase: FetchUserByIdService) {}

  async handle(payload: any) {
    const { userId } = payload;
    console.log(userId);

    try {
      const user = await this.fetchUserByIdUseCase.execute(userId);

      return {
        statusCode: 200,
        body: user,
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: err.stack,
      };
    }
  }
}

export { FetchUserByIdHandler };
