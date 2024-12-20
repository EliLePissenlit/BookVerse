<template>
    <nav class="bg-gradient-to-r from-[#D8C7AF] to-[#4B2A12] py-4 shadow-md fixed w-full top-0 z-50 transition-all duration-300" :class="scrolling ? 'bg-opacity-80 bg-[#4B2A12] shadow-lg' : ''">
      <div class="container mx-auto flex justify-between items-center px-8">
        <div class="flex items-center">
          <img alt="Logo" class="logo" src="../assets/logo.webp" width="110" height="110" />
        </div>
        
        <ul class="flex space-x-8 text-[#180D04] text-lg font-cambria mx-auto">
          <li>
            <router-link to="/home" class="hover:text-[#D8C7AF] transition-colors duration-300 transform hover:scale-105">Accueil</router-link>
          </li>
          <li>
            <router-link to="/articles" class="hover:text-[#D8C7AF] transition-colors duration-300 transform hover:scale-105">Articles</router-link>
          </li>
          <li>
            <router-link to="/about" class="hover:text-[#D8C7AF] transition-colors duration-300 transform hover:scale-105">À propos</router-link>
          </li>
          <li>
            <router-link to="/profile" class="hover:text-[#D8C7AF] transition-colors duration-300 transform hover:scale-105">Profil</router-link>
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
  import { ref, onMounted, onBeforeUnmount } from "vue";
  
  export default {
    setup() {
      const scrolling = ref(false);
  
      const handleScroll = () => {
        scrolling.value = window.scrollY > 50;
      };
  
      onMounted(() => {
        window.addEventListener("scroll", handleScroll);
      });
  
      onBeforeUnmount(() => {
        window.removeEventListener("scroll", handleScroll);
      });
  
      return {
        scrolling,
      };
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Cambria&display=swap');
  
  .font-cambria {
    font-family: 'Cambria', 'Times New Roman', serif;
  }
  
  .navbar {
    transition: all 0.3s ease;
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
  
  nav {
    transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
  
  nav.bg-[#4B2A12] {
    background-color: #4B2A12 !important;
  }
  
  nav.bg-opacity-80 {
    opacity: 0.8;
  }
  
  nav.shadow-lg {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
  
  nav a {
    transition: transform 0.2s ease-in-out;
  }
  
  nav a:hover {
    transform: scale(1.05);
  }
  
  nav a:active {
    transform: scale(0.98);
  }
  

  </style>
  