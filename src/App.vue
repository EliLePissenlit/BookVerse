<template>
  <div>
    <NavBar />
    <router-view /> <!-- Affiche dynamiquement les pages -->
    <Footer />
  </div>
</template>

<script lang="ts">
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>
