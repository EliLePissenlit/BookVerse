<template>
  <div class="about-page bg-gradient-to-r from-[#BBA782] to-[#D8C7AF] min-h-screen font-cambria">
    <!-- Header -->
    <header class="text-center py-12 pt-60">
      <h1 class="text-5xl font-bold text-[#4B2A12] tracking-wide">
        À Propos de Nous
      </h1>
      <p class="mt-4 text-xl text-[#180D04] font-medium">
        Découvrez notre mission et notre passion pour la littérature.
      </p>
    </header>

    <!-- Notre histoire -->
    <section class="container mx-auto px-8 mt-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-[#4B2A12]">Notre Histoire</h2>
        <p class="mt-4 text-lg text-[#180D04]">
          Fondée sur l'amour des mots et de la littérature, notre plateforme permet aux passionnés de partager leurs critiques et découvertes littéraires. Nous croyons que les livres sont des fenêtres ouvertes sur le monde, et chaque critique est une manière unique de voir l'univers à travers des yeux différents.
        </p>
      </div>

      <!-- Vision -->
      <div class="bg-white rounded-2xl shadow-xl p-8 text-center">
        <h3 class="text-2xl font-semibold text-[#4B2A12] mb-6">Notre Vision</h3>
        <p class="text-lg text-[#180D04]">
          Nous visons à offrir un espace où les passionnés de littérature peuvent échanger, découvrir et partager leurs avis sur des livres variés. Notre objectif est de rendre la lecture plus accessible et de créer une communauté autour des livres.
        </p>
      </div>
    </section>

    <!-- L'équipe -->
    <section class="container mx-auto px-8 mt-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-[#4B2A12]">Notre Équipe</h2>
        <p class="mt-4 text-lg text-[#180D04]">
          Notre équipe est composée de passionnés de littérature, d'éditeurs et d'illustrateurs qui travaillent ensemble pour créer une plateforme agréable et enrichissante pour tous les amoureux des livres.
        </p>
      </div>

      <!-- Membres de l'équipe -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="../assets/team-member1.jpg"
            alt="Membre de l'équipe"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-[#4B2A12]">Nom de Membre 1</h3>
            <p class="text-sm text-[#180D04] mt-2">Rôle au sein de l'équipe</p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="../assets/team-member2.jpg"
            alt="Membre de l'équipe"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-[#4B2A12]">Nom de Membre 2</h3>
            <p class="text-sm text-[#180D04] mt-2">Rôle au sein de l'équipe</p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="../assets/team-member3.jpg"
            alt="Membre de l'équipe"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-[#4B2A12]">Nom de Membre 3</h3>
            <p class="text-sm text-[#180D04] mt-2">Rôle au sein de l'équipe</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cambria:wght@400;700&display=swap');

.font-cambria {
  font-family: 'Cambria', serif;
}
</style>
