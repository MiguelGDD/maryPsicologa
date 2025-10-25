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
      <div class="contact__intro">
        <h2>Reserva tu primera sesión</h2>
        <p>
          Escríbeme o agenda una videollamada para descubrir cómo puedo acompañarte en este momento vital. La primera
          sesión está orientada a conocernos, comprender tus objetivos y establecer el mejor plan de trabajo terapéutico.
        </p>
      </div>
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
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #5a4ae3 0%, #7e6dff 45%, #9a8dff 100%);
  border-radius: 26px;
  color: #ffffff;
  padding: clamp(2.25rem, 6vw, 3.75rem);
  box-shadow: 0 40px 50px -40px rgba(42, 43, 107, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.18);
  scroll-margin-top: calc(clamp(7rem, 18vw, 10rem) + 25px);
}

.contact::after {
  content: '';
  position: absolute;
  inset: auto -10% -35% auto;
  width: clamp(12rem, 28vw, 18rem);
  height: clamp(12rem, 28vw, 18rem);
  background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 65%);
  transform: rotate(18deg);
  pointer-events: none;
}

.contact__content {
  display: grid;
  gap: clamp(1.5rem, 3vw, 2rem);
}

.contact__intro {
  display: grid;
  gap: 1rem;
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
  gap: clamp(1rem, 2vw, 1.35rem);
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

.contact a:not(.contact__cta) {
  color: inherit;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: rgba(255, 255, 255, 0.6);
}

.contact__cta {
  margin-top: clamp(0.5rem, 2vw, 1.5rem);
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

@media (min-width: 960px) {
  .contact__content {
    grid-template-columns: minmax(0, 1.15fr) minmax(260px, 0.85fr);
    align-items: center;
  }

  .contact__intro {
    max-width: 480px;
  }

  .contact__details {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    padding-left: 1.25rem;
    border-left: 1px solid rgba(255, 255, 255, 0.28);
  }
}

.contact__cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 30px rgba(16, 17, 68, 0.3);
}
</style>
