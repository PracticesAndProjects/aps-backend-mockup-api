import { FetchUsersService } from "../../../implementation/user/services";
import { FetchUserByIdHandler } from "../../../presentation/user/handlers/FetchUsersByIdHandler";
import { FetchUsersHandler } from "../../../presentation/user/handlers/FetchUsersHandler";
import { fetchUserByIdUseCase, fetchUsersUseCase } from "../services";

const appendUserHandler = (handlerName: string) =>
  ({
    FetchUserById: new FetchUserByIdHandler(fetchUserByIdUseCase),
    FetchUsers: new FetchUsersHandler(fetchUsersUseCase),
  }[handlerName]);

export { appendUserHandler };
