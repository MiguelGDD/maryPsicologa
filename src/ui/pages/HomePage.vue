<script setup>
import { computed, onMounted, ref } from 'vue'

import { useContainer } from '@/shared/di'
import ContactCard from '@/ui/components/ContactCard.vue'
import FaqSection from '@/ui/components/FaqSection.vue'
import ProfileHero from '@/ui/components/ProfileHero.vue'
import SpecialtySection from '@/ui/components/SpecialtySection.vue'

const { getProfileUseCase } = useContainer()

const profile = ref(null)
const isLoading = ref(true)
const hasError = ref(false)

onMounted(async () => {
  try {
    profile.value = await getProfileUseCase.execute()
  } catch (error) {
    hasError.value = true
    console.error(error)
  } finally {
    isLoading.value = false
  }
})

const specialties = computed(() => profile.value?.specialties ?? [])
const approaches = computed(() => profile.value?.approaches ?? [])
const contact = computed(() => profile.value?.contact ?? {})
</script>

<template>
  <div class="home">
    <div v-if="isLoading" class="home__state">
      <p>Cargando la información...</p>
    </div>
    <div v-else-if="hasError" class="home__state home__state--error">
      <p>Lo sentimos, no ha sido posible cargar la información en este momento.</p>
      <p>Por favor, inténtalo de nuevo más tarde.</p>
    </div>
    <template v-else>
      <ProfileHero :profile="profile" />
      <SpecialtySection :specialties="specialties" :approaches="approaches" />
      <FaqSection />
      <ContactCard :contact="contact" />
    </template>
  </div>
</template>

<style scoped>
.home {
  display: grid;
  gap: clamp(2rem, 5vw, 4rem);
}

.home__state {
  padding: 3rem 2rem;
  text-align: center;
  border-radius: 12px;
  border: 1px solid rgba(73, 64, 204, 0.15);
  background: rgba(255, 255, 255, 0.8);
  color: #3f3f3f;
  line-height: 1.6;
}

.home__state--error {
  border-color: rgba(204, 64, 64, 0.3);
  color: #b83232;
  background: rgba(255, 244, 244, 0.9);
}
</style>
