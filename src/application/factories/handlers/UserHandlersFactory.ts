import {
  FetchUserByIdHandler,
  FetchUsersHandler,
  SingupUserHandler,
} from "../../../presentation/user/handlers/";

import {
  fetchUserByIdUseCase,
  fetchUsersUseCase,
  signupUserUsecase,
} from "../services";

import { joiUserSignupDataValidator } from "../validators";

const appendUserHandler = (handlerName: string) =>
  ({
    FetchUserById: new FetchUserByIdHandler(fetchUserByIdUseCase),
    FetchUsers: new FetchUsersHandler(fetchUsersUseCase),
    SingupUserHandler: new SingupUserHandler(
      signupUserUsecase,
      joiUserSignupDataValidator
    ),
  }[handlerName]);

export { appendUserHandler };
