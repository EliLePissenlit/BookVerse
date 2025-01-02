<template>
    <div class="profile-page bg-[#D8C7AF] min-h-screen font-cambria  mt-40">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#BBA782] to-[#D8C7AF]">
        <section class="text-center mb-12">
          <div class="flex justify-center"></div>
          <h1 class="text-3xl font-extrabold text-[#4B2A12]">Nom de l'utilisateur</h1>
          <p class="mt-2 text-lg text-[#2E1C00]">email@example.com</p>
        </section>
  
        <!-- Profile Information Section -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div class="bg-[#F0E5D8] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 class="text-2xl font-semibold text-[#4B2A12] mb-4">Informations personnelles</h2>
            <p class="text-[#2E1C00]"><strong>Nom:</strong> Nom de l'utilisateur</p>
            <p class="text-[#2E1C00]"><strong>Email:</strong> email@example.com</p>
            <p class="text-[#2E1C00]"><strong>Téléphone:</strong> +33 1 23 45 67 89</p>
            <p class="text-[#2E1C00]"><strong>Adresse:</strong> 123 Rue Exemple, Paris, France</p>
          </div>
          <div class="bg-[#F0E5D8] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 class="text-2xl font-semibold text-[#4B2A12] mb-4">A propos de moi</h2>
            <p class="text-[#2E1C00]">
              Passionné(e) par le développement web et toujours en quête de nouvelles technologies, je travaille actuellement dans le domaine du développement frontend avec des outils modernes comme Vue.js, Tailwind CSS et Node.js.
            </p>
          </div>
        </section>
  
        <!-- Actions Section -->
        <section class="mb-12">
          <h2 class="text-2xl font-extrabold text-[#4B2A12] text-center mb-8">Mes Actions</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <!-- Button to Edit Profile -->
            <div class="text-center bg-[#F0E5D8] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <button class="text-xl font-semibold text-[#4B2A12] hover:text-[#BBA782]">
                Modifier le profil
              </button>
            </div>
            <!-- Button to View Articles -->
            <div class="text-center bg-[#F0E5D8] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <button class="text-xl font-semibold text-[#4B2A12] hover:text-[#BBA782]">
                Voir mes articles
              </button>
            </div>
            <!-- Button to Log Out -->
            <div class="text-center bg-[#F0E5D8] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <button class="text-xl font-semibold text-red-600 hover:text-red-800">
                Se déconnecter
              </button>
            </div>
          </div>
        </section>
  
        <!-- Activity History Section -->
        <section class="bg-[#F0E5D8] py-12">
          <h2 class="text-2xl font-extrabold text-[#4B2A12] text-center mb-8">Historique des activités</h2>
          <div class="space-y-4">
            <div class="bg-[#F0E5D8] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 class="text-xl font-semibold text-[#4B2A12] mb-2">Article publié</h3>
              <p class="text-[#2E1C00]">Un nouvel article a été publié dans votre blog: "Les dernières tendances du développement web".</p>
              <p class="text-sm text-[#BBA782] mt-2">Date: 02 Janvier 2025</p>
            </div>
            <div class="bg-[#F0E5D8] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 class="text-xl font-semibold text-[#4B2A12] mb-2">Commentaire reçu</h3>
              <p class="text-[#2E1C00]">Vous avez reçu un commentaire sur l'article "Les meilleures pratiques avec Vue.js".</p>
              <p class="text-sm text-[#BBA782] mt-2">Date: 28 Décembre 2024</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProfileView",
  };
  </script>
  
  <style scoped>
  /* Effet de survol pour les cartes */
  .hover\:shadow-xl:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  </style>
  