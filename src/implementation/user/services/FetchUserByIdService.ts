import UserRepository from "../../../infrastructure/persistence/emulated/repositories/UserRepository";

class FetchUserByIdService {
  constructor(private readonly userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(id: number) {
    const user = await this.userRepository.fetchOneById(id);
    if (user === undefined || null) {
      return {
        data: {
          msg: "No user found with the specified id.",
        },
      };
    }
    return user;
  }
}

export { FetchUserByIdService };
