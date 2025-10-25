<script setup>
defineProps({
  contact: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section id="contacto" class="contact">
    <div class="contact__content">
      <h2>Reserva tu primera sesión</h2>
      <p>
        Escríbeme o agenda una videollamada para descubrir cómo puedo acompañarte en este momento vital. La primera
        sesión está orientada a conocernos, comprender tus objetivos y establecer el mejor plan de trabajo terapéutico.
      </p>
      <div class="contact__details">
        <div>
          <p class="contact__label">Correo</p>
          <a :href="`mailto:${contact.email}`">
            {{ contact.email }}
          </a>
        </div>
        <div>
          <p class="contact__label">Teléfono</p>
          <a :href="`tel:${contact.phone}`">
            {{ contact.phone }}
          </a>
        </div>
        <div>
          <p class="contact__label">Ubicación</p>
          <p>{{ contact.location }}</p>
        </div>
      </div>
      <a
        class="contact__cta"
        href="https://calendly.com"
        target="_blank"
        rel="noopener"
      >
        {{ contact.cta }}
      </a>
    </div>
  </section>
</template>

<style scoped>
.contact {
  margin-top: clamp(2rem, 6vw, 4rem);
  background: linear-gradient(140deg, #5a4ae3 0%, #8a7ff5 100%);
  border-radius: 24px;
  color: #ffffff;
  padding: clamp(2rem, 6vw, 3.5rem);
  box-shadow: 0 40px 50px -40px rgba(42, 43, 107, 0.6);
}

.contact__content {
  display: grid;
  gap: 1.5rem;
}

.contact h2 {
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  margin: 0;
}

.contact p {
  margin: 0;
  line-height: 1.8;
}

.contact__details {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.contact__label {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.75rem;
  opacity: 0.85;
  margin-bottom: 0.5rem;
}

.contact a {
  color: inherit;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: rgba(255, 255, 255, 0.6);
}

.contact__cta {
  margin-top: 0.5rem;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  background: #ffffff;
  color: #4336bb;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.contact__cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 30px rgba(16, 17, 68, 0.3);
}
</style>
