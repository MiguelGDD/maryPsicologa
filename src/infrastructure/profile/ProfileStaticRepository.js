import { Profile } from '@/core/profile/domain/Profile'
import { ProfileRepository } from '@/core/profile/domain/ProfileRepository'

const profileData = {
  name: 'María Rojas',
  professionalTitle: 'Psicóloga Clínica y Psicoterapeuta',
  summary:
    'Psicóloga clínica colegiada en Colombia con énfasis en psicoterapia online para ansiedad, depresión, estrés laboral y relaciones sanas. Trabajo con terapia cognitivo-conductual, mindfulness y herramientas basadas en evidencia adaptadas al contexto colombiano.',
  specialties: [
    'Trastornos de ansiedad y manejo del estrés crónico',
    'Depresión, desmotivación y pérdida de sentido vital',
    'Autoestima, autoconocimiento y proyecto de vida',
    'Procesos de duelo, transición vital y crisis personales',
    'Terapia de pareja y fortalecimiento de vínculos afectivos',
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
    location: 'Consulta psicológica online para Colombia',
    cta: 'Agenda tu consulta online',
  },
}

export class ProfileStaticRepository extends ProfileRepository {
  async getProfile() {
    return new Profile(profileData)
  }
}
