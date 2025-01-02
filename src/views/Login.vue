<template>
  <div>
    <h1>Connexion</h1>
    <form @submit.prevent="handleLogin">
      <input type="text" v-model="username" placeholder="Nom d'utilisateur" />
      <input type="password" v-model="password" placeholder="Mot de passe" />
      <button type="submit">Se connecter</button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  name: "Login",
  setup() {
    const username = ref('');
    const password = ref('');

    const handleLogin = () => {
      console.log("Utilisateur :", username.value, "Mot de passe :", password.value);
    };

    return {
      username,
      password,
      handleLogin,
    };
  },
};
</script>
