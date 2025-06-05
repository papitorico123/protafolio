<!-- components/Contact.vue -->
<template>
  <div :class="{ 'dark-mode': isDarkMode }">
    <button @click="toggleDarkMode" class="fixed top-4 right-4 z-50 p-2 rounded-full bg-lime-200 dark-mode:bg-gray-800 text-lime-900 dark-mode:text-white shadow">
      <span v-if="isDarkMode">🌙</span>
      <span v-else>☀️</span>
    </button>
    <section
      class="min-h-screen flex items-center justify-center transition-colors duration-300 relative overflow-hidden"
      :class="isDarkMode ? 'bg-dark-gradient' : 'bg-light-gradient'"
    >
      <!-- Fantasmas de Pacman animados, fuera del form -->
      <img
        src="/ghosts-pacman-svgrepo-com.svg"
        alt="Fantasma Pacman"
        class="ghost absolute left-8 top-8 w-12 h-12 animate-ghost-x"
        style="z-index:1;"
      />
      <img
        src="/ghosts-pacman-svgrepo-com.svg"
        alt="Fantasma Pacman"
        class="ghost absolute right-8 top-1/3 w-10 h-10 animate-ghost-y"
        style="z-index:1;"
      />
      <img
        src="/ghosts-pacman-svgrepo-com.svg"
        alt="Fantasma Pacman"
        class="ghost absolute left-1/4 bottom-8 w-14 h-14 animate-ghost-x2"
        style="z-index:1;"
      />
      <img
        src="/ghosts-pacman-svgrepo-com.svg"
        alt="Fantasma Pacman"
        class="ghost absolute right-1/4 top-1/2 w-10 h-10 animate-ghost-y2"
        style="z-index:1;"
      />

      <div class="backdrop-blur-md bg-white/30 dark-mode:bg-gray-800/50 rounded-xl shadow-lg p-10 w-full max-w-screen-md transition-colors duration-300 relative z-10">
        <!-- Títulos animados -->
        <div class="mb-8">
          <Transition name="title-fade-slide">
            <h2
              v-if="show"
              class="select-none mb-2 text-4xl tracking-tight font-extrabold text-center text-lime-700 animated-underline shadow-title dark-mode:text-white flex items-center justify-center gap-2"
            >
              <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4e7.png" alt="Mail" class="w-8 h-8 inline-block" />
              ¡Hablemos! <span class="text-lime-500">Contáctame</span>
              <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4e7.png" alt="Mail" class="w-8 h-8 inline-block" />
            </h2>
          </Transition>
          <p class="font-light text-center text-lime-700 sm:text-xl dark-mode:text-white">
            ¿Tienes una idea, proyecto o simplemente quieres saludar? ¡Envíame un mensaje!
          </p>
        </div>
        <div class="mb-8">
          <Transition name="title-fade-slide">
            <h2
              v-if="show"
              class="select-none mb-2 text-4xl tracking-tight font-extrabold text-center text-lime-700 animated-underline shadow-title dark-mode:text-white"
            >
              correo
            </h2>
          </Transition>
          <p class="font-light text-center text-lime-700 sm:text-xl dark-mode:text-white"></p>
        </div>
        <div v-if="success" class="p-4 mb-6 text-green-800 bg-green-100 rounded-lg text-center font-bold">
          ¡Mensaje enviado con éxito!
        </div>
        <form
          v-else
          ref="formEl"
          @submit.prevent="handleSubmit"
          class="space-y-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-lime-900 dark-mode:text-white">Your email</label>
            <input
              type="email"
              id="email"
              name="email"
              v-model="form.email"
              required
              class="shadow-sm bg-lime-50 border border-lime-200 text-lime-900 text-sm rounded-lg focus:ring-lime-400 focus:border-lime-400 block w-full p-2.5 dark-mode:bg-gray-800 dark-mode:text-white"
              placeholder="name@flowbite.com"
            />
          </div>
          <div>
            <label for="subject" class="block mb-2 text-sm font-medium text-lime-900 dark-mode:text-white">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              v-model="form.subject"
              required
              class="block p-3 w-full text-sm text-lime-900 bg-lime-50 rounded-lg border border-lime-200 shadow-sm focus:ring-lime-400 focus:border-lime-400 dark-mode:bg-gray-800 dark-mode:text-white"
              placeholder="Let us know how we can help you"
            />
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block mb-2 text-sm font-medium text-lime-900 dark-mode:text-white">Your message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              v-model="form.message"
              required
              class="block p-2.5 w-full text-sm text-lime-900 bg-lime-50 rounded-lg shadow-sm border border-lime-200 focus:ring-lime-400 focus:border-lime-400 dark-mode:bg-gray-800 dark-mode:text-white"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-lime-600 sm:w-fit hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-lime-300 transition"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isDarkMode = useState('isDarkMode', () => false)
const success = ref(false)
const form = ref({ email: '', subject: '', message: '' })

// 1. Crea una referencia al formulario
const formEl = ref(null)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
}

const handleSubmit = async () => {
  // 2. Usa la referencia para FormData
  const res = await fetch('https://formspree.io/f/meokorev', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: new FormData(formEl.value)
  })
  if (res.ok) {
    success.value = true
    form.value = { email: '', subject: '', message: '' }
  }
}
</script>

<style scoped>
.bg-light-gradient {
  background: linear-gradient(135deg, #eaffd0 0%, #f9f871 100%), url('https://www.toptal.com/designers/subtlepatterns/patterns/pixel-weave.png');
  background-blend-mode: lighten;
}
.bg-dark-gradient {
  background: linear-gradient(135deg, #23272e 0%, #23272e 100%);
}
.dark-mode .bg-white\/30 {
  background-color: rgba(31, 41, 55, 0.7) !important;
}
.dark-mode label,
.dark-mode h2,
.dark-mode p,
.dark-mode input,
.dark-mode textarea {
  color: #fff !important;
}
.dark-mode input,
.dark-mode textarea {
  background-color: #23272e !important;
  border-color: #444 !important;
}
.dark-mode .bg-lime-200 {
  background-color: #23272e !important;
}
.dark-mode .text-lime-900 {
  color: #fff !important;
}

/* Animaciones para los fantasmas */
@keyframes ghost-x {
  0%, 100% { transform: translateX(0);}
  50% { transform: translateX(40px);}
}
@keyframes ghost-x2 {
  0%, 100% { transform: translateX(0);}
  50% { transform: translateX(-40px);}
}
@keyframes ghost-y {
  0%, 100% { transform: translateY(0);}
  50% { transform: translateY(30px);}
}
@keyframes ghost-y2 {
  0%, 100% { transform: translateY(0);}
  50% { transform: translateY(-30px);}
}
.animate-ghost-x {
  animation: ghost-x 3s ease-in-out infinite;
}
.animate-ghost-x2 {
  animation: ghost-x2 4s ease-in-out infinite;
}
.animate-ghost-y {
  animation: ghost-y 2.5s ease-in-out infinite;
}
.animate-ghost-y2 {
  animation: ghost-y2 3.5s ease-in-out infinite;
}

.title-fade-slide-enter-active {
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.title-fade-slide-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
}
.title-fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
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
</style>
