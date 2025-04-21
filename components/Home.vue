<template>
  <section class="max-w-3xl mx-auto text-center p-10">
    <h1 class="text-4xl font-bold mb-4">Sobre Mí</h1>
    <div class="mt-7">
      <img
        src="/images3.png"
        alt="Mi Foto"
        class="w-40 h-40 rounded-full mx-auto shadow-lg"
      />
    </div>
    <p class="text-lg text-gray-700">
      ¡Hola! Soy
      <strong class="text-blue-500">sergio portela</strong>, un apasionado
      desarrollador especializado en tecnologías web como Vue, Nuxt y
      TailwindCSS. Me encanta crear experiencias digitales dinámicas y
      optimizadas.
    </p>
      <!-- Sección de habilidades -->
      <div class="mt-6">
        <h2 class="text-2xl font-semibold">Habilidades</h2>
        <div class="flex justify-center flex-wrap gap-4 mt-4">
          <span v-for="skill in skills" :key="skill" class="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg">
            {{ skill }}
          </span>
        </div>
      </div>
  
      
      
    </section>
  </template>
  
  <script setup>
  const skills = ["JavaScript", "Vue.js", "Nuxt 3", "TailwindCSS", "Firebase", "Node.js", ];
  </script>
  