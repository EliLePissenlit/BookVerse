<template>
  <div class="home-page bg-gradient-to-r from-[#BBA782] to-[#D8C7AF] min-h-screen font-cambria">
    <!-- Slogan -->
    <header class="text-center py-12 pt-60">
      <h1 class="text-5xl font-bold text-[#4B2A12] tracking-wide">
        "Découvrez le pouvoir des mots"
      </h1>
      <p class="mt-4 text-xl text-[#180D04] font-medium">
        Plongez dans l'univers des livres et partagez vos histoires.
      </p>
    </header>

    <!-- Barre de recherche -->
    <section class="container mx-auto px-8 mt-8">
      <div class="flex justify-center">
        <input
          v-model="searchQuery"
          @input="handleSearch"
          type="text"
          placeholder="Recherchez un livre ou un auteur..."
          class="w-full sm:w-2/3 lg:w-1/2 px-6 py-3 text-lg border-4 border-[#3E1F1A] rounded-xl bg-[#F5F0E1] text-[#3E1F1A] shadow-lg focus:outline-none focus:ring-4 focus:ring-[#DAB7A2] transition-all duration-300 hover:border-[#DAB7A2] placeholder-[#C1A98B] focus:placeholder-transparent"
        />
      </div>
    </section>

    <!-- Section divisée -->
    <section class="container mx-auto px-8 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Image représentative -->
      <div class="flex justify-center">
        <img
          src="../assets/librairie.jpg"
          alt="Concept Représentatif"
          class="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 max-w-full h-auto"
        />
      </div>

      <!-- Formulaire -->
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <h2 class="text-3xl font-bold text-[#4B2A12] mb-6">
          Ajouter un article
        </h2>
        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label for="bookName" class="block text-lg font-medium text-[#180D04]">
              Nom du livre
            </label>
            <input
              v-model="formData.bookName"
              type="text"
              id="bookName"
              placeholder="Entrez le nom du livre"
              class="w-full px-4 py-2 border-2 border-[#3E1F1A] rounded-md text-[#180D04] bg-[#F5F0E1] focus:ring-2 focus:ring-[#4B2A12] focus:outline-none shadow-md transition-all duration-300"
            />
          </div>

          <div>
            <label for="authorName" class="block text-lg font-medium text-[#180D04]">
              Nom de l'auteur
            </label>
            <input
              v-model="formData.authorName"
              type="text"
              id="authorName"
              placeholder="Entrez le nom de l'auteur"
              class="w-full px-4 py-2 border-2 border-[#3E1F1A] rounded-md text-[#180D04] bg-[#F5F0E1] focus:ring-2 focus:ring-[#4B2A12] focus:outline-none shadow-md transition-all duration-300"
            />
          </div>

          <div>
            <label for="content" class="block text-lg font-medium text-[#180D04]">
              Texte
            </label>
            <textarea
              v-model="formData.content"
              id="content"
              rows="4"
              placeholder="Ajoutez du contenu..."
              class="w-full px-4 py-2 border-2 border-[#3E1F1A] rounded-md text-[#180D04] bg-[#F5F0E1] focus:ring-2 focus:ring-[#4B2A12] focus:outline-none shadow-md transition-all duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-[#4B2A12] text-white font-bold py-3 px-6 rounded-md shadow-lg hover:bg-[#D8C7AF] hover:text-[#180D04] transition-all duration-300"
          >
            Ajouter
          </button>
        </form>
      </div>
    </section>

    <section class="container mx-auto px-8 mt-16 pb-40 pt-20">
  <h2 class="text-3xl font-bold text-[#4B2A12] mb-8 text-center">Pour Vous </h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
    <div
      v-for="(book, index) in books"
      :key="index"
      class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500"
    >
      <img :src="book.image" alt="Livre" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-lg font-semibold text-[#4B2A12]">{{ book.title }}</h3>
        <p class="text-[#180D04] text-sm mt-2">{{ book.description }}</p>
        <button
          class="mt-4 px-4 py-2 bg-[#4B2A12] text-white text-sm rounded-lg hover:bg-[#DAB7A2] hover:text-[#4B2A12] transition-all duration-300"
        >
          Voir Plus
        </button>
      </div>
    </div>
  </div>
</section>




    <!-- Footer -->
    <Footer />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Footer,
  },
  setup() {
    const searchQuery = ref("");
    const formData = ref({
      bookName: "",
      authorName: "",
      content: "",
    });

    const books = ref([
      {
        title: "Le Pouvoir des Mots",
        description: "Un livre captivant sur le pouvoir des mots.",
        image: "../assets/book1.jpg",
      },
      {
        title: "L'Ombre des Secrets",
        description: "Un thriller palpitant plein de mystères.",
        image: "../assets/book2.jpg",
      },
      {
        title: "Les Mystères de l'Univers",
        description: "Explorez les secrets cachés de notre monde.",
        image: "../assets/book3.jpg",
      },
      {
        title: "Voyage au Cœur du Temps",
        description: "Un roman fantastique qui transcende les époques.",
        image: "../assets/book4.jpg",
      },
      {
        title: "L'Héritage des Anciens",
        description: "Une épopée mythologique captivante.",
        image: "../assets/book5.jpg",
      },
    ]);

    const handleSearch = () => {
      console.log("Recherche : ", searchQuery.value);
    };

    const submitForm = () => {
      console.log("Formulaire soumis :", formData.value);
      formData.value = { bookName: "", authorName: "", content: "" };
    };

    return {
      searchQuery,
      formData,
      books,
      handleSearch,
      submitForm,
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cambria:wght@400;700&display=swap');

.font-cambria {
  font-family: 'Cambria', serif;
}
</style>
