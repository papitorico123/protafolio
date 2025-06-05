<template>
  <div :class="{ 'dark-mode': isDarkMode }">
    <section
      class="min-h-screen flex items-center justify-center transition-colors duration-300 relative overflow-hidden"
      :class="isDarkMode ? 'bg-dark-gradient' : 'bg-light-gradient'"
    >
      <!-- Cubo limón izquierdo animado -->

      <div
        class="absolute left-2 top 9/8 w-24 h-24 bg-lime-300 dark-mode:bg-gray-700 rounded-xl shadow-xl animate-cube-left z-0 flex items-center justify-center"
      >
        <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f34b.png" alt="Limón" class="w-12 h-12 opacity-80" />
      </div>
      <div
        class="absolute left-0 top-1/4 w-24 h-24 bg-lime-300 dark-mode:bg-gray-700 rounded-xl shadow-xl animate-cube-left z-0 flex items-center justify-center"
      >
        <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f34b.png" alt="Limón" class="w-12 h-12 opacity-80" />
      </div>
      <!-- Cubo limón derecho animado -->
      <div
        class="absolute right-0 top-2/3 w-24 h-24 bg-yellow-200 dark-mode:bg-gray-600 rounded-xl shadow-xl animate-cube-right z-0 flex items-center justify-center"
      >
        <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f34b.png" alt="Limón" class="w-12 h-12 opacity-80" />
      </div>

      <div
        class="absolute down-0 top-2/3 w-24 h-24 bg-yellow-200 dark-mode:bg-gray-600 rounded-xl shadow-xl animate-cube-right z-0 flex items-center justify-center"
      >
        <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f34b.png" alt="Limón" class="w-12 h-12 opacity-80" />
      </div>
      <Transition name="fade-slide">
        <div v-if="show" key="main-content" class="relative z-10 backdrop-blur-md bg-white/30 dark-mode:bg-gray-800/50 rounded-xl shadow-lg p-10 w-full max-w-3xl text-center">
          <h1 class="text-4xl font-bold mb-4 text-lime-700 dark-mode:text-white">Sobre Mí</h1>
          <div class="mt-7 flex justify-center">
            <img 
              :src="currentImage"
              alt="Mi Foto"
              class="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-lime-300 shadow-xl bg-white"
              data-aos="flip-left"
              data-aos-duration="8000"
            />
          </div>
          <p class="text-lg text-lime-900 dark-mode:text-white">
            ¡Hola! Soy
            <strong class="text-lime-700 dark-mode:text-lime-200">sergio portela</strong>, un apasionado
            desarrollador especializado en tecnologías web como Vue, Nuxt y
            TailwindCSS. Me encanta crear experiencias digitales dinámicas y
            optimizadas.
          </p>
          <!-- Sección de habilidades -->
          <div class="mt-6">
            <h2 class="text-2xl font-semibold text-lime-700 dark-mode:text-lime-200">Habilidades</h2>
            <TransitionGroup name="skill-fade" tag="div" class="flex justify-center flex-wrap gap-4 mt-4">
              <span
                v-for="skill in skills"
                :key="skill.name"
                class="bg-lime-100 text-lime-700 px-3 py-1 rounded-lg flex items-center gap-2 dark-mode:bg-gray-700 dark-mode:text-lime-100"
              >
                <img :src="skill.logo" :alt="skill.name" class="w-6 h-6" />
                {{ skill.name }}
              </span>
            </TransitionGroup>
          </div>
          <!-- Botón para descargar CV animado -->
          <Transition name="bounce">
            <a
              v-if="show"
              href="/cv.pdf"
              target="_blank"
              rel="noopener"
              class="inline-block mt-4 px-6 py-2 bg-lime-600 text-white rounded-lg font-semibold shadow hover:bg-lime-700 transition dark-mode:bg-gray-700"
            >
              Ver CV
            </a>
          </Transition>
        </div>
      </Transition>
    </section>
  </div>
</template>

<script setup>
import { useState } from '#app'
import { ref, onMounted, onUnmounted } from 'vue'

const isDarkMode = useState('isDarkMode', () => false)
const show = ref(true)
const currentImage = ref('/sergio.png')

const skills = [
  { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript" },
  { name: "Vue.js", logo: "https://cdn.simpleicons.org/vue.js" },
  { name: "react", logo: "https://cdn.simpleicons.org/react" },
  { name: "TailwindCSS", logo: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "mongodb", logo: "https://cdn.simpleicons.org/mongodb" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github" },
  { name: "python", logo: "https://cdn.simpleicons.org/python" },
  { name: "typescript", logo: "https://cdn.simpleicons.org/typescript" },
]

let lastScroll = 0

const handleScroll = () => {
  const currentScroll = window.scrollY
  if (currentScroll < lastScroll) {
    // Si sube, muestra todo y cambia la imagen si quieres
    show.value = true
    currentImage.value = '/sergio.png' // Cambia aquí la imagen al subir
  } else {
    // Si baja, oculta todo y vuelve a la original
    show.value = false
    currentImage.value = '/sergio.png'
  }
  lastScroll = currentScroll
}

onMounted(() => {
  lastScroll = window.scrollY
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.bg-light-gradient {
  background: linear-gradient(135deg, #eaffd0 0%, #f9f871 100%), url('https://www.toptal.com/designers/subtlepatterns/patterns/pixel-weave.png');
  background-blend-mode: lighten;
}
.bg-dark-gradient {
  background: linear-gradient(135deg, #23272e 0%, #23272e 100%);
}
@keyframes cube-left {
  0%, 100% { transform: translateY(0) rotate(-8deg);}
  50% { transform: translateY(40px) rotate(8deg);}
}
@keyframes cube-right {
  0%, 100% { transform: translateY(0) rotate(8deg);}
  50% { transform: translateY(-40px) rotate(-8deg);}
}
.animate-cube-left {
  animation: cube-left 3s ease-in-out infinite;
}
.animate-cube-right {
  animation: cube-right 3s ease-in-out infinite;
}
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.fade-slide-enter-to, .fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* ...resto de tus estilos... */
</style>