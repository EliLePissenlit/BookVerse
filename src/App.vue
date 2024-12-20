<template>
  <div>
    <NavBar />
    <HomeView/>
    <router-view />
    <footer />
  </div>
</template>

<script lang="ts">
import NavBar from "./components/NavBar.vue";
import HomeView from "./views/HomeView.vue";
import footer from "./components/footer.vue";


export default {
  components: {
    NavBar,
    HomeView,
    footer,
  },
};
</script>
