import { IExpressRouteHandler } from "../../../domain/usecases/ExpressRouteHandler";
import { SignupUserService } from "../../../implementation/user/services";
import { IUserModel } from "../../../implementation/models/";
import { JoiUserSignupDataValidator } from "../../../validation/user";

class SingupUserHandler implements IExpressRouteHandler {
  constructor(
    private readonly signupUserService: SignupUserService,
    private readonly userSignupDataValidator: JoiUserSignupDataValidator
  ) {}

  async handle(payload: any) {
    const validationError = this.userSignupDataValidator.validate(payload);

    if (validationError) {
      return {
        statusCode: 400,
        body: {
          msg: validationError,
        },
      };
    }

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
