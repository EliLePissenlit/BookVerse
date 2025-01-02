<template>
  <div class="home-page bg-gradient-to-r from-[#BBA782] to-[#D8C7AF] min-h-screen font-cambria">
    <!-- Titre de la page -->
    <header class="text-center py-12 pt-60">
      <h1 class="text-5xl font-bold text-[#4B2A12] tracking-wide">
        Nos Articles
      </h1>
      <p class="mt-4 text-xl text-[#180D04] font-medium">
        Découvrez les critiques et récits passionnants autour des livres.
      </p>
    </header>

    <!-- Section Articles -->
    <section class="container mx-auto px-8 mt-16 pb-40">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        <div
          v-for="article in articles"
          :key="article.id"
          class="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
        >
          <!-- Image de l'article -->
          <img
            :src="article.image"
            alt="Image de l'article"
            class="w-full h-48 object-cover rounded-t-lg"
          />
          <div class="p-6">
            <!-- Titre de l'article -->
            <h3 class="text-lg font-semibold text-[#4B2A12] group-hover:text-[#DAB7A2] transition-colors duration-300">
              {{ article.title }}
            </h3>
            <!-- Extrait de l'article -->
            <p class="text-[#180D04] text-sm mt-2 group-hover:text-[#4B2A12] transition-colors duration-300">
              {{ article.excerpt }}
            </p>
          </div>
          <div
            class="absolute inset-0 bg-[#4B2A12] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <a
            :href="`/articles/${article.id}`"
            class="absolute inset-0"
          ></a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'Le Pouvoir des Mots',
          excerpt: 'Une exploration du pouvoir des mots et de leur impact sur la société.',
          image: 'https://via.placeholder.com/300x200',
        },
        {
          id: 2,
          title: 'L’Ombre des Secrets',
          excerpt: 'Un article qui plonge dans l’obscurité des mystères et des secrets.',
          image: 'https://via.placeholder.com/300x200',
        },
        {
          id: 3,
          title: 'Voyage au Cœur du Temps',
          excerpt: 'Un regard fascinant sur les voyages dans le temps et leur influence sur l’histoire.',
          image: 'https://via.placeholder.com/300x200',
        },
        {
          id: 4,
          title: 'L’Héritage des Anciens',
          excerpt: 'Découverte des histoires légendaires et des traditions des civilisations anciennes.',
          image: 'https://via.placeholder.com/300x200',
        },
      ],
    };
  },
};
</script>

<style scoped>
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}
.group:hover .group-hover\:text-[#DAB7A2] {
  color: #DAB7A2;
}
.group:hover .group-hover\:text-[#4B2A12] {
  color: #4B2A12;
}
.group:hover .group-hover\:text-[#180D04] {
  color: #180D04;
}
</style>
