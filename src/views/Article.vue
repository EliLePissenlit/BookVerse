<template>
    <div class="articles">
      <h1>Articles</h1>
      <ul>
        <li v-for="article in articles" :key="article.slug">
          <h2>{{ article.title }}</h2>
          <p>{{ article.description }}</p>
          <div>Par {{ article.author.username }} le {{ new Date(article.createdAt).toLocaleDateString() }}</div>
        </li>
      </ul>
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  
  export default defineComponent({
    name: 'Articles',
    setup() {
      const articles = ref([]);
      const error = ref('');
  
      onMounted(async () => {
        await fetchArticles();
      });
  
      async function fetchArticles() {
        try {
          const token = localStorage.getItem('jwt');
          const response = await fetch('https://api.realworld.io/api/articles', {
            method: 'GET',
            headers: {
              'Authorization': `Token ${token}`, 
              'Content-Type': 'application/json'
            }
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          const data = await response.json();
          articles.value = data.articles;
        } catch (err) {
          error.value = 'Failed to load articles: ' + err.message;
        }
      }
  
      return { articles, error };
    }
  });
  </script>