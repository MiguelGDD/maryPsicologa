<script setup>
defineProps({
  profile: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section
    id="sobre-mi"
    class="hero"
    aria-labelledby="sobre-mi-titulo"
    aria-describedby="sobre-mi-resumen"
  >
    <div class="hero__content">
      <p class="hero__eyebrow">Psicología centrada en las personas</p>
      <h1 id="sobre-mi-titulo" class="hero__title">
        {{ profile.name }} · Psicóloga clínica online en Colombia
      </h1>
      <h2 class="hero__subtitle">
        {{ profile.professionalTitle }} especializada en terapia cognitivo-conductual y bienestar emocional
      </h2>
      <p id="sobre-mi-resumen" class="hero__summary">
        {{ profile.summary }}
      </p>
      <a class="hero__cta" href="#contacto" title="Ir a la sección de contacto para agendar consulta">
        Agenda tu consulta online
      </a>
    </div>
    <div class="hero__card" role="presentation">
      <div class="hero__card-item">
        <p class="hero__card-title">Más de 10 años</p>
        <p class="hero__card-description">Acompañando procesos de crecimiento personal sostenido.</p>
      </div>
      <div class="hero__card-divider" aria-hidden="true"></div>
      <div class="hero__card-item">
        <p class="hero__card-title">Consulta online</p>
        <p class="hero__card-description">Modalidad virtual segura y confidencial para toda Colombia.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  display: grid;
  gap: clamp(2rem, 6vw, 3rem);
  padding-block: clamp(2rem, 6vw, 6rem);
  scroll-margin-top: calc(clamp(7rem, 18vw, 10rem) + 25px);
}

.hero::before {
  content: '';
  position: absolute;
  inset: clamp(-2.5rem, -6vw, -1rem) clamp(-1.5rem, -5vw, -0.5rem) auto clamp(-2.5rem, -6vw, -1rem);
  height: clamp(16rem, 30vw, 20rem);
  border-radius: 32px;
  background: linear-gradient(135deg, rgba(90, 74, 227, 0.1) 0%, rgba(126, 108, 255, 0.08) 100%);
  filter: blur(0);
  z-index: -1;
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
  margin-bottom: clamp(1.75rem, 4vw, 2.5rem);
  max-width: 62ch;
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
  padding: clamp(1.5rem, 4vw, 2.25rem);
  display: grid;
  gap: clamp(1rem, 2vw, 1.35rem);
  font-size: 0.95rem;
  line-height: 1.7;
  color: #2f2f2f;
  border: 1px solid rgba(93, 80, 228, 0.08);
}

.hero__card-item {
  display: grid;
  gap: 0.4rem;
}

.hero__card-title {
  margin: 0;
  font-weight: 600;
  font-size: 1.05rem;
  color: #4336bb;
}

.hero__card-description {
  margin: 0;
  color: rgba(47, 47, 47, 0.84);
}

.hero__card-divider {
  height: 1px;
  background: linear-gradient(90deg, rgba(93, 80, 228, 0), rgba(93, 80, 228, 0.25), rgba(93, 80, 228, 0));
}

@media (min-width: 900px) {
  .hero {
    grid-template-columns: minmax(0, 1.1fr) minmax(280px, 360px);
    align-items: center;
    gap: clamp(2.5rem, 6vw, 4rem);
  }

  .hero::before {
    height: clamp(18rem, 32vw, 22rem);
    inset: clamp(-3rem, -6vw, -1.5rem) clamp(-2rem, -5vw, -0.75rem) auto clamp(-3rem, -6vw, -1.5rem);
  }

  .hero__card {
    position: relative;
    top: clamp(0.5rem, 2vw, 1.5rem);
  }
}

@media (min-width: 1200px) {
  .hero__title {
    letter-spacing: -0.02em;
  }

  .hero__card {
    padding: 2.5rem;
  }

  .hero__summary {
    font-size: 1.1rem;
  }
}
</style>
