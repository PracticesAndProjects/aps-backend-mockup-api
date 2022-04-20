import { IExpressRouteHandler } from "../../../domain/usecases/ExpressRouteHandler";
import { SignupUserService } from "../../../implementation/user/services";
import { IUserModel } from "../../../implementation/models/";

class SingupUserHandler implements IExpressRouteHandler {
  constructor(private readonly signupUserService: SignupUserService) {}

  async handle(payload: any) {
    const { data }: { data: IUserModel } = payload;

    try {
      const result = await this.signupUserService.execute(data);

      return {
        statusCode: 200,
        body: result,
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: err.stack,
      };
    }
  }
}

export { SingupUserHandler };
