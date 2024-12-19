<template>
    <nav class="bg-gradient-to-r from-[#D8C7AF] to-[#4B2A12] py-4 shadow-md">
      <div class="container mx-auto flex justify-between items-center px-8">
        <div class="flex items-center">
          <img alt="Logo" class="logo" src="../assets/logo.webp" width="110" height="110" />
        </div>
        
        <ul class="flex space-x-8 text-[#180D04] text-lg font-cambria mx-auto">
          <li>
            <router-link to="/" class="hover:text-[#D8C7AF] transition-colors duration-300">Accueil</router-link>
          </li>
          <li>
            <router-link to="/articles" class="hover:text-[#D8C7AF] transition-colors duration-300">Articles</router-link>
          </li>
          <li>
            <router-link to="/about" class="hover:text-[#D8C7AF] transition-colors duration-300">À propos</router-link>
          </li>
          <li>
            <router-link to="/profile" class="hover:text-[#D8C7AF] transition-colors duration-300">Profil</router-link>
          </li>
        </ul>
  
        <div class="flex items-center">
          <router-link to="/logout" class="bg-gradient-to-r from-[#D8C7AF] to-[#4B2A12] text-[#180D04] hover:text-[#F8D087] text-lg font-cambria font-bold py-2 px-6 rounded-md border-2 border-[#180D04] transition-all duration-300 ease-in-out transform hover:scale-105">
            Déconnexion
          </router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script lang="ts">
    export default {};
  </script>
  
  <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Cambria&display=swap');
  
    .font-cambria {
      font-family: 'Cambria', 'Times New Roman', serif;
    }
  
    .from-[#4B2A12] {
      background-color: #4B2A12;
    }
  
    .to-[#F8D087] {
      background-color: #F8D087; 
    }
  
    .text-[#180D04] {
      color: #180D04;
    }
  
    .hover\:text-[#D8C7AF] {
      color: #D8C7AF;
    }
  </style>
  