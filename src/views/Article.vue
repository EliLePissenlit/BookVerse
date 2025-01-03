<template>
  <div class="article-page bg-[#F9F6F1] min-h-screen font-cambria pt-40">
    <div class="max-w-4xl mx-auto py-12 px-6 sm:px-8">
      <!-- Header -->
      <section class="mb-12">
        <h1 class="text-4xl font-extrabold text-[#4B2A12] text-center mb-6">Titre de l'Article</h1>
        <p class="text-sm text-[#BBA782] text-center">Publié le : 01 Janvier 2025</p>
      </section>

      <!-- Image and Content -->
      <section class="bg-white rounded-lg shadow-lg p-6 mb-12">
        <img
          src="https://via.placeholder.com/800x400"
          alt="Image de l'article"
          class="w-full rounded-lg mb-6"
        />
        <p class="text-[#2E1C00] leading-relaxed text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, est ut 
          vestibulum scelerisque, odio arcu volutpat turpis, vitae scelerisque urna arcu non 
          mauris. Donec vel sagittis lectus.
        </p>
      </section>

      <!-- Actions -->
      <section class="flex items-center justify-between mb-12">
        <!-- Star Rating -->
        <div class="flex items-center space-x-2">
          <span class="text-[#4B2A12] font-bold text-lg">Évaluation :</span>
          <div class="flex space-x-1">
            <button class="text-yellow-500 text-2xl">&#9733;</button>
            <button class="text-yellow-500 text-2xl">&#9733;</button>
            <button class="text-yellow-500 text-2xl">&#9733;</button>
            <button class="text-gray-400 text-2xl">&#9733;</button>
            <button class="text-gray-400 text-2xl">&#9733;</button>
          </div>
        </div>
        <!-- Like Button -->
        <button
          class="bg-[#BBA782] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#A5926D] transition-colors duration-300"
        >
          Ajouter au J'aime
        </button>
      </section>

      <!-- Comments Section -->
      <section class="bg-[#F0E5D8] rounded-lg shadow-lg p-6">
        <h2 class="text-2xl font-extrabold text-[#4B2A12] mb-6">Commentaires</h2>

        <!-- Comment Form -->
        <form class="mb-6">
          <textarea
            class="w-full p-4 rounded-lg border border-[#BBA782] focus:outline-none focus:ring-2 focus:ring-[#BBA782] resize-none"
            rows="4"
            placeholder="Écrire un commentaire..."
          ></textarea>
          <button
            type="submit"
            class="mt-4 bg-[#4B2A12] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#3E250F] transition-colors duration-300"
          >
            Publier
          </button>
        </form>

        <!-- Comments List -->
        <div class="space-y-4">
          <div class="bg-white p-4 rounded-lg shadow-md">
            <p class="text-[#2E1C00] font-semibold">Utilisateur 1</p>
            <p class="text-[#2E1C00]">Très bon article, merci pour le partage !</p>
            <p class="text-sm text-[#BBA782] mt-2">01 Janvier 2025</p>
          </div>
         
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleDetails",
};
</script>

<style scoped>
textarea::placeholder {
  color: #a59c91;
}
</style>
