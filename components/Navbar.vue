<template>
  <nav
    :class="isDarkMode
      ? 'sticky top-0 z-50 bg-dark-gradient border-b border-gray-700 shadow-md transition-colors'
      : 'sticky top-0 z-50 bg-gradient-to-r from-lime-200 via-yellow-100 to-lime-100 border-b border-lime-300 shadow-md transition-colors'"
  >
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <!-- Logo personalizado (puedes cambiar el src por el tuyo) -->
        <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f34b.png" alt="Limón Logo" class="w-8 h-8" />
        <span :class="isDarkMode ? 'text-white' : 'text-lime-700'" class="self-center text-2xl font-semibold whitespace-nowrap">Portafolio</span>
      </NuxtLink>

      <button data-collapse-toggle="navbar-multi-level" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2" :class="isDarkMode ? 'text-white hover:bg-gray-800 focus:ring-gray-700' : 'text-lime-700 hover:bg-lime-100 focus:ring-lime-300'" aria-controls="navbar-multi-level" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
        
      <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
        <ul :class="isDarkMode
          ? 'flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent'
          : 'flex flex-col font-medium p-4 md:p-0 mt-4 border border-lime-100 rounded-lg bg-lime-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent'"
        >
          <li>
            <a href="https://github.com/papitorico123" target="_blank"
              :class="isDarkMode
                ? 'flex items-center gap-2 py-2 px-3 text-white rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-lime-300 md:p-0'
                : 'flex items-center gap-2 py-2 px-3 text-lime-900 rounded-sm hover:bg-lime-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-700 md:p-0'"
            >
              <img :src="isDarkMode ? 'https://cdn.simpleicons.org/github/fff' : 'https://cdn.simpleicons.org/github/7cb518'" alt="GitHub" class="w-5 h-5" />
              GitHub
            </a>
          </li>
          <li>
            <a href="https://wa.me/3027964981" target="_blank"
              :class="isDarkMode
                ? 'flex items-center gap-2 py-2 px-3 text-white rounded-sm hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-lime-300 md:p-0'
                : 'flex items-center gap-2 py-2 px-3 text-lime-900 rounded-sm hover:bg-lime-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-700 md:p-0'"
            >
              <img :src="isDarkMode ? 'https://cdn.simpleicons.org/whatsapp/fff' : 'https://cdn.simpleicons.org/whatsapp/25d366'" alt="WhatsApp" class="w-5 h-5" />
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useState } from '#app'
const isDarkMode = useState('isDarkMode', () => false)
</script>

<style scoped>
.bg-dark-gradient {
  background: linear-gradient(135deg, #23272e 0%, #23272e 100%);
}
</style>
