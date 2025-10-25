import { Profile } from '@/core/profile/domain/Profile'
import { ProfileRepository } from '@/core/profile/domain/ProfileRepository'

const profileData = {
  name: 'María Rojas',
  professionalTitle: 'Psicóloga Clínica y Psicoterapeuta',
  summary:
    'Acompaño a personas adultas en procesos de cambio personal, gestión emocional y construcción de relaciones más sanas desde un enfoque integrador y humano.',
  specialties: [
    'Ansiedad y manejo del estrés',
    'Autoestima y autoconocimiento',
    'Procesos de duelo y transición vital',
    'Relaciones de pareja y vínculos afectivos',
  ],
  approaches: [
    'Terapia cognitivo-conductual',
    'Mindfulness y compasión',
    'Terapias de tercera generación',
    'Psicoterapia humanista',
  ],
  contact: {
    email: 'contacto@mariarojaspsicologa.com',
    phone: '+57 300 000 0000',
    location: 'Consulta online y presencial en Bogotá',
    cta: 'Agenda una sesión',
  },
}

export class ProfileStaticRepository extends ProfileRepository {
  async getProfile() {
    return new Profile(profileData)
  }
}
