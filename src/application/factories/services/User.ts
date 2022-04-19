import { FetchUsersService } from "../../../implementation/user/services";
import { FetchUserByIdService } from "../../../implementation/user/services/FetchUserByIdService";
import UserRepository from "../../../infrastructure/persistence/emulated/repositories/UserRepository";

const userRepositoryUseCase = new UserRepository();
const fetchUserByIdUseCase = new FetchUserByIdService(userRepositoryUseCase);

const fetchUsersUseCase = new FetchUsersService(userRepositoryUseCase);

export { fetchUserByIdUseCase, fetchUsersUseCase };
