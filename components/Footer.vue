<template>
  <footer :class="isDarkMode ? 'bg-dark-gradient text-white' : 'bg-light-gradient text-lime-900'">
    <div class="container mx-auto px-6 text-center flex flex-col items-center gap-3">
      <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f34b.png" alt="Limón Logo" class="w-8 h-8 mx-auto mb-1" />
      <p class="font-semibold">&copy; 2023 Mi Portafolio. Todos los derechos reservados.</p>
      <div class="flex gap-4 justify-center mt-2">
        <a href="https://github.com/sergiodavid432" target="_blank" class="hover:scale-110 transition-transform" title="GitHub">
          <img src="https://cdn.simpleicons.org/github/7cb518" alt="GitHub" class="w-6 h-6" />
        </a>
        <a href="https://wa.me/30026627596" target="_blank" class="hover:scale-110 transition-transform" title="WhatsApp">
          <img src="https://cdn.simpleicons.org/whatsapp/25d366" alt="WhatsApp" class="w-6 h-6" />
        </a>
        <a href="mailto:sergiodavid432@gmail.com" class="hover:scale-110 transition-transform" title="Correo">
          <img src="https://cdn.simpleicons.org/gmail/ea4335" alt="Correo" class="w-6 h-6" />
        </a>
      </div>
      <p :class="isDarkMode ? 'text-gray-300' : 'text-lime-700'" class="text-sm mt-2">Hecho con 💚 por Sergio Portela</p>
    </div>
  </footer>
</template>

<script setup>
import { useState } from '#app'
const isDarkMode = useState('isDarkMode', () => false)
</script>

<style scoped>
.bg-light-gradient {
  background: linear-gradient(135deg, #eaffd0 0%, #f9f871 100%);
}
.bg-dark-gradient {
  background: linear-gradient(135deg, #23272e 0%, #23272e 100%);
}
</style>

