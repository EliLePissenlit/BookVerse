<template>
  <div>
    <h1>Article {{ id }}</h1>
    <p>Voici les détails de l'article.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: "Article",
  setup() {
    const route = useRoute();
    const { id } = toRefs(route.params);

    return {
      id,
    };
  },
});
</script>
