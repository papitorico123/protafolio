<!-- layouts/default.vue -->
<template>
  <div :class="{ 'dark-mode': isDarkMode }" class="app-container">
    <button @click="toggleDarkMode" class="theme-button">
        <MoonIcon v-if="isDarkMode" class="h-6 w-6" />
        <SunIcon v-else class="h-6 w-6" />
    </button>
    <slot />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'; // Importa los iconos

const isDarkMode = useState('isDarkMode',()=>false);
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDarkMode.value = true;
  }
});
</script>

<style scoped>
.app-container {
  transition: background-color 0.3s ease, color 0.3s ease; /* Añade transiciones para suavizar el cambio */
}
.theme-button {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 5px;
  background-color: transparent; /* Elimina el fondo verde */
  color: black; /* Color del icono en modo claro */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 100; /* Asegura que esté por encima del contenido */
}

.dark-mode .theme-button{
    color:white;
}

/* Estilos para el tema claro */
.app-container {
  background-color:white;
  color: rgb(51, 48, 48);
}

/* Estilos para el tema oscuro */
.app-container.dark-mode {
  background-color: #121212;
  color: #ffffff;
}
</style>
