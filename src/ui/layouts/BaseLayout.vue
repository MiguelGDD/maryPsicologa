<template>
  <div class="layout">
    <header class="layout__header">
      <div class="layout__container layout__header-inner">
        <div class="layout__brand">
          <span class="layout__logo" aria-hidden="true">ML</span>
          <div class="layout__identity">
            <p class="layout__title">María López Psicología</p>
            <p class="layout__subtitle">Bienestar emocional para una vida más plena</p>
          </div>
        </div>
        <nav class="layout__nav" aria-label="Secciones principales">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#especialidades">Especialidades</a>
          <a href="#enfoque">Enfoque</a>
          <a href="#contacto">Contacto</a>
          <a class="layout__cta" href="#contacto">Agenda una sesión</a>
        </nav>
      </div>
    </header>

    <main class="layout__main">
      <div class="layout__container">
        <slot></slot>
      </div>
    </main>

    <footer class="layout__footer">
      <div class="layout__container layout__footer-inner">
        <p>© {{ new Date().getFullYear() }} María López Psicóloga. Todos los derechos reservados.</p>
        <p class="layout__footer-contact">
          Consulta online y presencial · Colegio Oficial de Psicólogos de Madrid
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #f4f1ff 0%, #ffffff 50%, #f9f9ff 100%);
  color: #1f1f1f;
}

.layout__container {
  width: min(1120px, 100% - clamp(2rem, 6vw, 4rem));
  margin: 0 auto;
}

.layout__header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(93, 80, 228, 0.08);
}

.layout__header-inner {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem 0;
}

.layout__brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.layout__logo {
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #6353f3 0%, #8f80ff 100%);
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 0.08em;
}

.layout__identity {
  display: grid;
  gap: 0.25rem;
}

.layout__title {
  font-size: clamp(1.125rem, 3vw, 1.8rem);
  font-weight: 600;
  margin: 0;
}

.layout__subtitle {
  margin: 0;
  font-size: 0.95rem;
  color: #5a5a5a;
}

.layout__nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
  align-items: center;
}

.layout__nav a {
  text-decoration: none;
  font-weight: 500;
  color: #5a4ae3;
  padding-bottom: 0.2rem;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.layout__nav a:hover {
  border-color: #5a4ae3;
  color: #4336bb;
  transform: translateY(-1px);
}

.layout__cta {
  border-bottom: none;
  padding: 0.65rem 1.6rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #5a4ae3 0%, #7d6df0 100%);
  color: #ffffff;
  font-weight: 600;
  box-shadow: 0 12px 22px -12px rgba(82, 68, 200, 0.75);
}

.layout__cta:hover {
  border-color: transparent;
  color: #ffffff;
}

.layout__main {
  flex: 1;
  padding: clamp(2rem, 5vw, 4rem) 0 clamp(4rem, 8vw, 6rem);
}

.layout__footer {
  border-top: 1px solid rgba(93, 80, 228, 0.08);
  background: rgba(90, 74, 227, 0.08);
  color: #433c96;
  font-size: 0.9rem;
}

.layout__footer-inner {
  padding: 1.75rem 0;
  display: grid;
  gap: 0.5rem;
}

.layout__footer-contact {
  margin: 0;
  color: rgba(67, 60, 150, 0.85);
}

@media (min-width: 768px) {
  .layout__header-inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
}

@media (min-width: 1100px) {
  .layout__nav {
    gap: 0.75rem clamp(1.5rem, 2.5vw, 2.5rem);
  }
}
</style>

