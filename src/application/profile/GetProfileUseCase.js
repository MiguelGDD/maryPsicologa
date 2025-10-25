export class GetProfileUseCase {
  constructor(profileRepository) {
    this.profileRepository = profileRepository
  }

  async execute() {
    return this.profileRepository.getProfile()
  }
}

