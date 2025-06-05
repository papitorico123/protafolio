import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-02-10",
  devtools: { enabled: true },
  css:[
    '~/assets/css/main.css',
    'aos/dist/aos.css'
  ],
  vite: {    
    plugins: [      
      tailwindcss(),    
    ],  
  },
  plugins: [
    '~/plugins/aos.client.js'
  ],
  modules: [
    [
      '@nuxtjs/color-mode',
      {
        classSuffix: ''
      }
    ]
  ]
}
);