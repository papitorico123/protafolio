<!-- components/Projects.vue -->
<template>
  <div :class="{ 'dark': isDarkMode }" class="min-h-screen bg-gray-100">
    <!-- Encabezado -->
    <header class="bg-primary-500 text-black py-20">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-4">Bienvenido a mi Portafolio</h2>
        <p class="text-lg">Aquí puedes ver algunos de mis proyectos destacados y certifcados .</p>
      </div>
        <section class="container mx-auto px-6 py-12">
          <h2 class="text-3xl font-bold text-center mb-8">Proyectos</h2>
        </section>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-6">
        <!-- Tarjeta de proyecto -->
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img
            :src="project.image"
            :alt="project.name"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">{{ project.name }}</h3>
            <p class="mb-4">{{ project.description }}</p>
            <div class="flex space-x-4">
              <a
                :href="project.demoUrl"
                target="_blank"
                class="text-primary hover:underline"
              >
                Ver Demo
              </a>
              <a
                :href="project.codeUrl"
                target="_blank"
                class="hover:text-primary"
              >
                Código Fuente
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>

  </div>
</template>

<script setup>
import { useState } from '#app';

const isDarkMode = useState('isDarkMode');
const projects = [
  {
    id: 1,
    name: 'Proyecto Alpha',
    description: 'Una plataforma de gestión de tareas.',
    image: 'https://via.placeholder.com/400x200',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 2,
    name: 'Proyecto Beta',
    description: 'Un sitio web de comercio electrónico.',
    image: 'https://via.placeholder.com/400x200',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 3,
    name: 'Proyecto Gamma',
    description: 'Una aplicación móvil de seguimiento de fitness.',
    image: 'https://via.placeholder.com/400x200',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 4,
    name: 'Proyecto Delta',
    description: 'Un sistema de gestión de inventarios.',
    image: 'https://via.placeholder.com/400x200',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 5,
    name: 'Proyecto Epsilon',
    description: 'Un blog personal con integración de CMS.',
    image: 'https://via.placeholder.com/400x200',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: 6,
    name: 'Proyecto Zeta',
    description: 'Una herramienta de análisis de datos.',
    image: 'https://via.placeholder.com/400x200',
    demoUrl: '#',
    codeUrl: '#',
  },
];
</script>
