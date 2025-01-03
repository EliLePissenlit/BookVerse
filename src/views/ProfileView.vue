<template>
  <div class="profile-page bg-[#D8C7AF] min-h-screen font-cambria pt-40 ">
    <div class="max-w-7xl mx-auto py-12 px-6 sm:px-8">
      <section class="text-center mb-12">
        <div class="flex justify-center mb-4">
          <div class="w-24 h-24 bg-[#BBA782] rounded-full flex items-center justify-center">
            <span class="text-3xl font-bold text-white">NU</span>
          </div>
        </div>
        <h1 class="text-4xl font-extrabold text-[#4B2A12] mb-2">Nom de l'utilisateur</h1>
        <p class="text-lg text-[#2E1C00]">email@example.com</p>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="bg-[#F0E5D8] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 class="text-2xl font-semibold text-[#4B2A12] mb-6">Informations personnelles</h2>
          <ul class="text-[#2E1C00] space-y-2">
            <li><strong>Nom :</strong> Nom de l'utilisateur</li>
            <li><strong>Prenom :</strong> Prenom de l'utilisateur</li>
            <li><strong>Email :</strong> email@example.com</li>
          </ul>
        </div>
        <div class="bg-[#F0E5D8] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 class="text-2xl font-semibold text-[#4B2A12] mb-6">À propos de moi</h2>
          <p class="text-[#2E1C00] leading-relaxed">
            Ajoutez ici une description personnelle ou des détails pertinents.
          </p>
        </div>
      </section>

      <section class="mb-12">
  <h2 class="text-2xl font-extrabold text-[#4B2A12] text-center mb-8">Mes Actions</h2>
  <div class="flex justify-center space-x-8">
    <div class="bg-[#F0E5D8] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
      <button class="text-lg font-semibold text-[#4B2A12] hover:text-[#BBA782]">
        Modifier le profil
      </button>
    </div>
    <div class="bg-[#F0E5D8] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
      <button class="text-lg font-semibold text-[#4B2A12] hover:text-[#BBA782]">
        Voir mes articles
      </button>
    </div>
  </div>
</section>

      <section class="bg-[#F0E5D8] py-12 rounded-lg shadow-lg">
        <h2 class="text-2xl font-extrabold text-[#4B2A12] text-center mb-8">Historique des activités</h2>
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 class="text-xl font-semibold text-[#4B2A12] mb-2">J'aime</h3>
            <p class="text-[#2E1C00]">
              Vous avez aimé l'article "<strong></strong>".
            </p>
            <p class="text-sm text-[#BBA782] mt-2">Date : </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 class="text-xl font-semibold text-[#4B2A12] mb-2">Commentaire publié</h3>
            <p class="text-[#2E1C00]">
              Vous avez commenté sur l'article "<strong> </strong>" : 
            </p>
            <p class="text-sm text-[#BBA782] mt-2">Date : </p>
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
.hover\:shadow-xl:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>
