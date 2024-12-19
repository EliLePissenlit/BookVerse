<template>
    <nav class="bg-slate-200">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <img src="" alt="BookVerse Logo" class="h-8 mr-4">
          <a href="../assets/logo.webp" class="text-2xl font-bold text-[#FFD700]">BookVerse</a>
        </div>
        <ul class="flex space-x-6">
          <li>
            <router-link to="/" class="hover:text-[#FFD700]">Accueil</router-link>
          </li>
          <li>
            <router-link to="/favorites" class="hover:text-[#FFD700]">Favoris</router-link>
          </li>
          <li>
            <router-link to="/login" class="hover:text-[#FFD700]">Connexion</router-link>
          </li>
        </ul>
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

</style>

  