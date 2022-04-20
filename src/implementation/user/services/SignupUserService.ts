import UserRepository from "../../../infrastructure/persistence/emulated/repositories/UserRepository";
import { IUserModel } from "../../models";

class SignupUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(data: IUserModel) {
    return await this.userRepository.createSingle(data);
  }
}

export { SignupUserService };
