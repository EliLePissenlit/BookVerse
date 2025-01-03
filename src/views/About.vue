<template>
  <div class="about-page bg-gradient-to-r from-[#BBA782] to-[#D8C7AF] font-cambria min-h-screen flex flex-col">
    <header class="text-center py-12 pt-40">
      <h1 class="text-5xl font-bold text-[#4B2A12] tracking-wide">
        À Propos de Nous
      </h1>
      <p class="mt-4 text-xl text-[#180D04] font-medium">
        Découvrez notre mission et notre passion pour la littérature.
      </p>
    </header>

    <section class="container mx-auto px-8 mt-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mb-16">
        <div>
          <h2 class="text-3xl font-bold text-[#4B2A12] mb-4">Notre Histoire</h2>
          <p class="text-lg text-[#180D04]">
            Fondée sur l'amour des mots et de la littérature, notre plateforme
            permet aux passionnés de partager leurs critiques et découvertes
            littéraires. Nous croyons que les livres sont des fenêtres ouvertes
            sur le monde, et chaque critique est une manière unique de voir
            l'univers à travers des yeux différents.
          </p>
        </div>
        <div>
          <img
            src="../assets/image2.jpeg"
            alt="Notre Histoire"
            class="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mb-16">
        <div class="order-2 lg:order-1">
          <img
            src="../assets/image1.jpeg"
            alt="Notre Vision"
            class="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div class="order-1 lg:order-2">
          <h2 class="text-3xl font-bold text-[#4B2A12] mb-4">Notre Vision</h2>
          <p class="text-lg text-[#180D04]">
            Nous visons à offrir un espace où les passionnés de littérature
            peuvent échanger, découvrir et partager leurs avis sur des livres
            variés. Notre objectif est de rendre la lecture plus accessible et
            de créer une communauté autour des livres.
          </p>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-[#4B2A12]">Notre Équipe</h2>
        <p class="mt-4 text-lg text-[#180D04]">
          Notre équipe est composée de passionnés de littérature, d'éditeurs et
          d'illustrateurs qui travaillent ensemble pour créer une plateforme
          agréable et enrichissante pour tous les amoureux des livres.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
        <div
          class="team-member bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
        >
          <img
            src="../assets/team-member1.jpg"
            alt="Membre de l'équipe"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-[#4B2A12]">
              Nom de Membre 1
            </h3>
            <p class="text-sm text-[#180D04] mt-2">Rôle au sein de l'équipe</p>
          </div>
        </div>

        <div
          class="team-member bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
        >
          <img
            src="../assets/team-member2.jpg"
            alt="Membre de l'équipe"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-[#4B2A12]">
              Nom de Membre 2
            </h3>
            <p class="text-sm text-[#180D04] mt-2">Rôle au sein de l'équipe</p>
          </div>
        </div>

        <div
          class="team-member bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
        >
          <img
            src="../assets/team-member3.jpg"
            alt="Membre de l'équipe"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-[#4B2A12]">
              Nom de Membre 3
            </h3>
            <p class="text-sm text-[#180D04] mt-2">Rôle au sein de l'équipe</p>
          </div>
        </div>
      </div>
    </section>

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
.font-cambria {
  font-family: 'Cambria', serif;
}

body {
  margin: 0;
  padding: 0;
}

.about-page {
  display: flex;
  flex-direction: column;
}

footer {
  margin-top: auto;
}
</style>
