<template>
  <div class="layout">
    <header class="layout__header">
      <div class="layout__brand">
        <span class="layout__logo" aria-hidden="true">ML</span>
        <div>
          <p class="layout__title">María Rojas Psicología</p>
          <p class="layout__subtitle">Bienestar emocional para una vida más plena</p>
        </div>
      </div>
      <nav class="layout__nav" aria-label="Secciones principales">
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#especialidades">Especialidades</a>
        <a href="#enfoque">Enfoque</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>

    <main class="layout__main">
      <slot></slot>
    </main>

    <footer class="layout__footer">
      <p>© {{ new Date().getFullYear() }} María Rojas Psicóloga. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: linear-gradient(180deg, #f5f2ff 0%, #ffffff 40%);
  color: #1f1f1f;
}

.layout__header {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem clamp(1rem, 5vw, 4rem) 1rem;
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
  background: #5a4ae3;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 0.08em;
}

.layout__title {
  font-size: clamp(1.125rem, 3vw, 1.75rem);
  font-weight: 600;
  margin: 0;
}

.layout__subtitle {
  margin: 0.2rem 0 0;
  font-size: 0.95rem;
  color: #575757;
}

.layout__nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem clamp(0.75rem, 3vw, 1.5rem);
}

.layout__nav a {
  text-decoration: none;
  font-weight: 500;
  color: #5a4ae3;
  padding-bottom: 0.2rem;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease;
}

.layout__nav a:hover {
  border-color: #5a4ae3;
}

.layout__main {
  padding: 0 clamp(1rem, 5vw, 4rem) 4rem;
}

.layout__footer {
  padding: 1.75rem clamp(1rem, 5vw, 4rem);
  background-color: rgba(90, 74, 227, 0.08);
  text-align: center;
  font-size: 0.9rem;
  color: #4a4a4a;
}

@media (min-width: 768px) {
  .layout__header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .layout__brand {
    gap: 1.5rem;
  }
}
</style>
