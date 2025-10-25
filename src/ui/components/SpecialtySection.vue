<script setup>
defineProps({
  specialties: {
    type: Array,
    default: () => [],
  },
  approaches: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section id="especialidades" class="specialty">
    <div class="specialty__intro">
      <h2>Áreas de especialidad</h2>
      <p>
        Un acompañamiento cercano y profesional para ayudarte a comprender tus emociones, fortalecer tus recursos
        personales y avanzar hacia la vida que deseas vivir.
      </p>
    </div>
    <div class="specialty__grid">
      <article class="specialty__card">
        <h3>Trabajemos juntas/os en</h3>
        <ul>
          <li v-for="item in specialties" :key="item">
            {{ item }}
          </li>
        </ul>
      </article>
      <article id="enfoque" class="specialty__card">
        <h3>Enfoque terapéutico</h3>
        <ul>
          <li v-for="item in approaches" :key="item">
            {{ item }}
          </li>
        </ul>
      </article>
    </div>
    <p class="specialty__note">
      Cada proceso es personalizado: escogemos técnicas y ritmo de trabajo en conjunto, respetando tus tiempos y objetivos.
    </p>
  </section>
</template>

<style scoped>
.specialty {
  display: grid;
  gap: clamp(2rem, 6vw, 3.5rem);
  background: radial-gradient(120% 120% at 100% 0%, rgba(126, 108, 255, 0.08) 0%, rgba(249, 249, 255, 0) 62%);
  padding: clamp(1.5rem, 5vw, 3rem);
  border-radius: 24px;
  border: 1px solid rgba(93, 80, 228, 0.08);
}

.specialty__intro h2 {
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  margin-bottom: 0.75rem;
}

.specialty__intro p {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.8;
  color: #3f3f3f;
  max-width: 58ch;
}

.specialty__grid {
  display: grid;
  gap: clamp(1.5rem, 4vw, 2rem);
}

.specialty__card {
  background: #ffffff;
  border-radius: 18px;
  padding: clamp(1.75rem, 4vw, 2.5rem);
  box-shadow: 0 22px 50px -35px rgba(33, 31, 84, 0.45);
  border: 1px solid rgba(93, 80, 228, 0.08);
}

.specialty__card h3 {
  margin-top: 0;
  font-size: 1.2rem;
  color: #4b3fd6;
}

.specialty__card ul {
  list-style: none;
  margin: 1.25rem 0 0;
  padding: 0;
  display: grid;
  gap: 0.85rem;
  color: #2a2a2a;
}

.specialty__card li::before {
  content: '•';
  color: #4b3fd6;
  font-weight: bold;
  display: inline-block;
  width: 1rem;
  margin-left: -1rem;
}

.specialty__note {
  margin-top: -0.5rem;
  font-size: 0.95rem;
  color: rgba(47, 47, 47, 0.75);
}

@media (min-width: 900px) {
  .specialty__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1200px) {
  .specialty {
    padding: clamp(2.5rem, 4vw, 4rem) clamp(3rem, 5vw, 4.75rem);
  }

  .specialty__grid {
    gap: 2.5rem;
  }
}
</style>
