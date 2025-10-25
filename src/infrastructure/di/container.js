import { GetProfileUseCase } from '@/application/profile/GetProfileUseCase'
import { ProfileStaticRepository } from '@/infrastructure/profile/ProfileStaticRepository'

export const createContainer = () => {
  const profileRepository = new ProfileStaticRepository()
  const getProfileUseCase = new GetProfileUseCase(profileRepository)

  return {
    profileRepository,
    getProfileUseCase,
  }
}
