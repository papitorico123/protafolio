<template>
  <div :class="{ 'dark-mode': isDarkMode }">
    <section
      class="min-h-screen flex flex-col items-center justify-start py-12 transition-colors duration-300 relative overflow-hidden"
      :class="isDarkMode ? 'bg-dark-gradient' : 'bg-light-gradient'"
    >
      <!-- Limón decorativo arriba a la izquierda (animado) -->
      <img
        src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f34b.png"
        alt="Limón"
        class="absolute left-4 top-4 w-12 h-12 opacity-80 z-0 animate-lemon-x"
      />
      <!-- Limón decorativo abajo a la derecha (animado) -->
      <img
        src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f34b.png"
        alt="Limón"
        class="absolute right-4 bottom-4 w-16 h-16 opacity-70 z-0 animate-lemon-y"
      />
      <!-- Limón decorativo centro derecha (animado) -->
      <img
        src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f34b.png"
        alt="Limón"
        class="absolute right-24 top-1/2 w-10 h-10 opacity-60 z-0 animate-lemon-x2"
      />

      <div class="backdrop-blur-md bg-white/30 dark-mode:bg-gray-800/50 rounded-xl shadow-lg p-8 w-full max-w-6xl transition-colors duration-300 relative z-10">
        <h2 class="text-4xl font-extrabold text-center text-lime-700 mb-2 animated-underline shadow-title select-none dark-mode:text-lime-200 flex items-center justify-center gap-2">
          <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f34b.png" alt="Limón" class="w-8 h-8 inline-block" />
          Dashboard de Proyectos
          <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f34b.png" alt="Limón" class="w-8 h-8 inline-block" />
        </h2>
        <p class="text-center text-lime-700 mb-8 dark-mode:text-lime-100 flex items-center justify-center gap-2">
          Aquí puedes ver y explorar mis proyectos destacados.
          <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f34b.png" alt="Limón" class="w-6 h-6 inline-block" />
        </p>
        <TransitionGroup name="project-slide" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in projects"
            :key="project.id"
            class="bg-lime-50 border border-lime-200 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col dark-mode:bg-gray-900 dark-mode:border-gray-700 relative"
          >
            <!-- Limón en cada tarjeta -->
            <img
              src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f34b.png"
              alt="Limón"
              class="absolute right-2 top-2 w-7 h-7 opacity-60"
            />
            <template v-if="project.video">
              <video
                :src="project.video"
                controls
                class="w-full h-40 object-cover rounded-t-xl"
              ></video>
            </template>
            <template v-else>
              <img
                :src="project.image"
                :alt="project.name"
                class="w-full h-40 object-cover rounded-t-xl"
              />
            </template>
            <div class="p-5 flex-1 flex flex-col">
              <h3 class="text-xl font-bold text-lime-700 mb-2 dark-mode:text-lime-200 flex items-center gap-2">
                {{ project.name }}
                <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f34b.png" alt="Limón" class="w-5 h-5 inline-block" />
              </h3>
              <p class="text-lime-900 mb-4 flex-1 dark-mode:text-lime-100">{{ project.description }}</p>
              <div class="flex flex-col items-center space-y-2 mt-auto">
                <a
                  v-if="project.demoUrl"
                  :href="project.demoUrl"
                  target="_blank"
                  class="inline-block px-4 py-2 bg-lime-600 text-white rounded-lg font-semibold shadow hover:bg-lime-700 transition dark-mode:bg-gray-700 items-center gap-2"
                >
                  Ver Demo
                  <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f34b.png" alt="Limón" class="w-4 h-4 inline-block" />
                </a>
                <a
                  :href="project.codeUrl"
                  target="_blank"
                  class="inline-block px-4 py-2 bg-white border border-lime-400 text-lime-700 rounded-lg font-semibold shadow hover:bg-lime-100 transition dark-mode:bg-gray-800 dark-mode:border-gray-600 dark-mode:text-lime-100 items-center gap-2"
                >
                  Código
                  <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f34b.png" alt="Limón" class="w-4 h-4 inline-block" />
                </a>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useState } from '#app'
const isDarkMode = useState('isDarkMode', () => false)
const projects = [
  {
    id: 1,
    name: 'reconstruccion pagina web boca latina',
    description: 'Una plataforma de gestión de tareas.',
    image: '/bocalatina.png',
    demoUrl: 'https://qbdwmqgc-5500.use2.devtunnels.ms/',
    codeUrl: 'https://github.com/papitorico123/remakeboca',
  },
  {
    id: 2,
    name: 'Proyecto Beta',
    description: 'Un sitio web de comercio electrónico.',
    image: '/image.png',
    demoUrl: 'https://bockstack.vercel.app/chat',
    codeUrl: 'https://github.com/papitorico123/bockstack',
  },
  {
    id: 3,
    name: 'Proyecto Gamma',
    description: 'Una aplicación móvil de seguimiento de fitness.',
    image: '/atix.png',
    codeUrl: 'https://github.com/Morenito23302/Atix-Stock',
  },
  {
    id: 4,
    name: 'Proyecto Delta',
    description: 'Un sistema de gestión de inventarios.',
    image: '/devtre.png',
    codeUrl: 'https://github.com/papitorico123/devtree',
  },
  {
    id: 5,
    name: 'Proyecto Epsilon',
    description: 'Un blog personal con integración de CMS.',
    image: '/portafolio.png',
    demoUrl: '',
    codeUrl: 'https://github.com/papitorico123/protafolio',
  },
  {
    id: 6,
    name: 'Proyecto Zeta',
    description: 'Una herramienta de análisis de datos.',
    video: '/reconocimiento.mp4', // <-- minúscula y ruta correcta
    codeUrl: 'https://github.com/papitorico123/reconocimiento/tree/master',
  },
];
</script>

<style scoped>
.bg-light-gradient {
  background: linear-gradient(135deg, #eaffd0 0%, #f9f871 100%), url('https://www.toptal.com/designers/subtlepatterns/patterns/pixel-weave.png');
  background-blend-mode: lighten;
}
.bg-dark-gradient {
  background: linear-gradient(135deg, #23272e 0%, #23272e 100%);
}
.project-slide-enter-active {
  transition: all 0.7s cubic-bezier(0.4,0,0.2,1);
}
.project-slide-enter-from {
  opacity: 0;
  transform: translateX(-60px) scale(0.98);
}
.project-slide-enter-to {
  opacity: 1;
  transform: translateX(0) scale(1);
}

.animated-underline {
  position: relative;
  display: inline-block;
}
.animated-underline::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #b6ff60 0%, #a3e635 100%);
  border-radius: 2px;
  box-shadow: 0 2px 8px #a3e63555;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
}
.animated-underline:hover::after,
.animated-underline:focus::after {
  transform: scaleX(1);
}

.shadow-title {
  text-shadow: 0 2px 8px #b6ff6055, 0 1px 0 #fff;
}

@keyframes lemon-x {
  0%, 100% { transform: translateX(0);}
  50% { transform: translateX(40px);}
}
@keyframes lemon-x2 {
  0%, 100% { transform: translateX(0);}
  50% { transform: translateX(-40px);}
}
@keyframes lemon-y {
  0%, 100% { transform: translateY(0);}
  50% { transform: translateY(-30px);}
}
.animate-lemon-x {
  animation: lemon-x 3s ease-in-out infinite;
}
.animate-lemon-x2 {
  animation: lemon-x2 4s ease-in-out infinite;
}
.animate-lemon-y {
  animation: lemon-y 2.5s ease-in-out infinite;
}
</style>