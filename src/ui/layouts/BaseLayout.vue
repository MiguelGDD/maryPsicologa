<template>
  <div class="layout">
    <header class="layout__header">
      <div class="layout__container layout__header-inner">
        <div class="layout__brand">
          <span class="layout__logo" aria-hidden="true">MR</span>
          <div class="layout__identity">
            <p class="layout__title">María Rojas Psicología</p>
            <p class="layout__subtitle">Bienestar emocional para una vida más plena</p>
          </div>
        </div>
        <nav class="layout__nav" aria-label="Secciones principales">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#especialidades-enfoque">Especialidades y enfoque</a>
          <a class="layout__contact-link" href="#contacto">Contacto</a>
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
        <p>© {{ new Date().getFullYear() }} María Rojas Psicóloga. Todos los derechos reservados.</p>
        <p class="layout__footer-contact">
          Consulta online y presencial · Colegio Colombiano de Psicólogos (COLPSIC)
        </p>
      </div>
    </footer>

    <a
      class="layout__whatsapp"
      href="https://wa.me/5730000000000?text=Hola%20Mar%C3%ADa,%20quisiera%20agendar%20una%20sesi%C3%B3n"
      target="_blank"
      rel="noopener"
      aria-label="Abrir chat de WhatsApp"
    >
      <svg
        class="layout__whatsapp-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 1.723.45 3.379 1.31 4.856L2.25 21.75l4.987-1.273A9.69 9.69 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 17.25a7.463 7.463 0 0 1-3.808-1.025l-.272-.16-2.963.756.79-2.9-.177-.3a7.46 7.46 0 0 1-1.12-3.831c0-4.116 3.334-7.45 7.45-7.45s7.45 3.334 7.45 7.45-3.334 7.45-7.45 7.45Zm4.234-5.558c-.232-.116-1.372-.676-1.585-.754-.213-.079-.368-.116-.523.116-.155.232-.602.754-.737.909-.135.155-.271.174-.503.058-.232-.116-.98-.361-1.864-1.15-.689-.615-1.153-1.374-1.288-1.606-.135-.232-.014-.357.102-.472.104-.103.232-.271.348-.406.116-.135.155-.232.232-.387.077-.155.039-.29-.019-.406-.058-.116-.523-1.261-.717-1.725-.189-.454-.382-.392-.523-.4-.135-.007-.29-.009-.445-.009-.155 0-.406.058-.62.29-.213.232-.813.794-.813 1.938s.833 2.249.949 2.405c.116.155 1.639 2.506 3.973 3.514.556.24.99.383 1.328.489.558.177 1.067.152 1.47.092.448-.067 1.372-.56 1.566-1.1.194-.54.194-1.004.135-1.1-.058-.097-.213-.155-.445-.271Z"
          fill="currentColor"
        />
      </svg>
    </a>
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

.layout__nav a:not(.layout__cta) {
  text-decoration: none;
  font-weight: 500;
  color: #5a4ae3;
  padding-bottom: 0.2rem;
  border-bottom: 2px solid transparent;
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.layout__nav a:not(.layout__cta):hover {
  border-color: #5a4ae3;
  color: #4336bb;
  transform: translateY(-1px);
}

.layout__nav a.layout__cta {
  color: #ffffff;
}

.layout__contact-link {
  display: inline-flex;
}

.layout__cta {
  display: none;
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

.layout__whatsapp {
  position: fixed;
  bottom: clamp(1rem, 4vw, 1.75rem);
  right: clamp(1rem, 4vw, 1.75rem);
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #2cd875 0%, #58e69b 45%, #5a4ae3 100%);
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 18px 30px rgba(37, 32, 71, 0.25);
  text-decoration: none;
  z-index: 40;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.layout__whatsapp:hover {
  transform: translateY(-2px);
  box-shadow: 0 22px 36px rgba(37, 32, 71, 0.32);
}

.layout__whatsapp-icon {
  width: 1.5rem;
  height: 1.5rem;
}

@media (min-width: 768px) {
}

@media (min-width: 1040px) {
  .layout__header-inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: clamp(2rem, 4vw, 3rem);
  }

  .layout__nav {
    gap: 0.75rem clamp(1.5rem, 2.5vw, 2.5rem);
    justify-content: flex-end;
  }

  .layout__contact-link {
    display: none;
  }

  .layout__cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .layout__whatsapp {
    display: none;
  }
}
</style>
