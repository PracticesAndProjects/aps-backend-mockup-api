import UserRepository from "../../../infrastructure/persistence/emulated/repositories/UserRepository";

class FetchUsersService {
  constructor(private readonly userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute() {
    return await this.userRepository.fetchAll();
  }
}

export { FetchUsersService };
