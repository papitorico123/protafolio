<template>
    <button @click="toggleDarkMode" class="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
      <span v-if="isDarkMode">🌙</span>
      <span v-else>☀️</span>
    </button>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  const isDarkMode = ref(false);
  
  onMounted(() => {
    isDarkMode.value = localStorage.getItem("theme") === "dark";
    document.documentElement.classList.toggle("dark", isDarkMode.value);
  });
  
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle("dark", isDarkMode.value);
    localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
  };
  </script>
  