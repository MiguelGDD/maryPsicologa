<template>
  <section id="faq" class="faq">
    <div class="faq__intro">
      <h2>Preguntas frecuentes sobre la consulta psicológica online</h2>
      <p>
        Resolver tus dudas te ayuda a sentirte más segura al comenzar tu proceso terapéutico. Aquí encontrarás respuestas
        sobre cómo trabajo, qué puedo abordar y cómo reservar tu consulta psicológica online desde cualquier ciudad de Colombia.
      </p>
    </div>
    <div class="faq__items">
      <article class="faq__item">
        <h3>¿Cómo agendo una consulta psicológica online?</h3>
        <p>
          Solo debes escribirme por WhatsApp o correo con tu disponibilidad. Te compartiré las opciones de agenda, el link
          seguro para la videollamada y un breve formulario clínico para preparar nuestra primera sesión.
        </p>
      </article>
      <article class="faq__item">
        <h3>¿Qué tipo de problemáticas atiendo?</h3>
        <p>
          Trabajo con ansiedad, estrés, depresión, dificultades relacionales, duelo, crisis personales y crecimiento
          profesional. Combinamos terapia cognitivo-conductual, mindfulness y psicología humanista para crear un plan
          adaptado a tus objetivos.
        </p>
      </article>
      <article class="faq__item">
        <h3>¿Por qué elegir una psicóloga clínica colegiada en Colombia?</h3>
        <p>
          Estar registrada en el Colegio Colombiano de Psicólogos garantiza cumplimiento ético, experiencia clínica y
          actualización constante. Recibirás acompañamiento profesional con herramientas validadas y enfoque culturalmente
          sensible para el contexto colombiano.
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.faq {
  display: grid;
  gap: clamp(1.5rem, 5vw, 2.75rem);
  background: rgba(90, 74, 227, 0.06);
  border-radius: 20px;
  padding: clamp(1.75rem, 5vw, 3rem);
  border: 1px solid rgba(90, 74, 227, 0.1);
}

.faq__intro h2 {
  margin: 0 0 0.75rem;
  font-size: clamp(1.75rem, 4vw, 2.2rem);
}

.faq__intro p {
  margin: 0;
  color: rgba(35, 35, 35, 0.85);
  line-height: 1.75;
  max-width: 65ch;
}

.faq__items {
  display: grid;
  gap: clamp(1.25rem, 3vw, 1.75rem);
}

.faq__item {
  background: #ffffff;
  border-radius: 16px;
  padding: clamp(1.25rem, 4vw, 1.75rem);
  box-shadow: 0 24px 45px -35px rgba(24, 24, 54, 0.4);
  border: 1px solid rgba(93, 80, 228, 0.08);
}

.faq__item h3 {
  margin: 0 0 0.65rem;
  font-size: 1.1rem;
  color: #4336bb;
}

.faq__item p {
  margin: 0;
  line-height: 1.7;
  color: rgba(35, 35, 35, 0.85);
}

@media (min-width: 900px) {
  .faq__items {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>

