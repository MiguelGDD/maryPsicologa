<script setup>
defineProps({
  profile: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section id="sobre-mi" class="hero">
    <div class="hero__content">
      <p class="hero__eyebrow">Psicología centrada en las personas</p>
      <h1 class="hero__title">
        {{ profile.name }}
      </h1>
      <h2 class="hero__subtitle">
        {{ profile.professionalTitle }}
      </h2>
      <p class="hero__summary">
        {{ profile.summary }}
      </p>
      <a class="hero__cta" href="#contacto">
        Reserva una sesión
      </a>
    </div>
    <div class="hero__card" role="presentation">
      <p>Más de 10 años acompañando procesos de crecimiento personal.</p>
      <p>Sesiones en español e inglés.</p>
      <p>Consulta online disponible.</p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  gap: 2rem;
  padding-block: clamp(2rem, 6vw, 4.5rem);
}

.hero__eyebrow {
  color: #5a4ae3;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 0.75rem;
}

.hero__title {
  font-size: clamp(2rem, 6vw, 3.25rem);
  margin: 0;
}

.hero__subtitle {
  margin: 0.4rem 0 1.5rem;
  font-size: clamp(1.15rem, 3vw, 1.5rem);
  color: #5a4ae3;
  font-weight: 600;
}

.hero__summary {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #3f3f3f;
  margin-bottom: 2rem;
}

.hero__cta {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  background: #5a4ae3;
  color: #ffffff;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hero__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(90, 74, 227, 0.25);
}

.hero__card {
  background: #ffffff;
  border-radius: 18px;
  box-shadow: 0 30px 60px -25px rgba(24, 37, 104, 0.25);
  padding: clamp(1.5rem, 5vw, 2rem);
  display: grid;
  gap: 1rem;
  font-size: 1rem;
  line-height: 1.7;
  color: #363636;
}

@media (min-width: 900px) {
  .hero {
    grid-template-columns: 3fr 2fr;
    align-items: center;
  }
}
</style>

