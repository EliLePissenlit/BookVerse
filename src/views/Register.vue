<template>
    <div class="signup-page bg-[#E8D8B3] min-h-screen flex items-center justify-center font-cambria mt-20">
      <div class="w-full max-w-md bg-gradient-to-r from-[#D6C1A8] to-[#E8D8B3] rounded-xl shadow-lg p-8">
        <h1 class="text-3xl font-extrabold text-[#3D2C1B] text-center mb-6">Inscription</h1>
  
        <form class="space-y-6">
          <div>
            <label for="fullName" class="block text-[#3D2C1B] font-semibold mb-2">Nom Complet</label>
            <input 
              type="text" 
              id="fullName" 
              placeholder="Entrer votre nom complet" 
              class="w-full px-4 py-2 border border-[#D6C1A8] rounded-lg focus:outline-none focus:ring focus:ring-[#D6C1A8] text-[#3D2C1B]" 
            />
          </div>
  
          <div>
            <label for="email" class="block text-[#3D2C1B] font-semibold mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Entrer votre email" 
              class="w-full px-4 py-2 border border-[#D6C1A8] rounded-lg focus:outline-none focus:ring focus:ring-[#D6C1A8] text-[#3D2C1B]" 
            />
          </div>
  
          <div>
            <label for="password" class="block text-[#3D2C1B] font-semibold mb-2">Mot de passe</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Créer un mot de passe" 
              class="w-full px-4 py-2 border border-[#D6C1A8] rounded-lg focus:outline-none focus:ring focus:ring-[#D6C1A8] text-[#3D2C1B]" 
            />
          </div>
  
          <div>
            <label for="confirmPassword" class="block text-[#3D2C1B] font-semibold mb-2">Confirmer le mot de passe</label>
            <input 
              type="password" 
              id="confirmPassword" 
              placeholder="Confirmer votre mot de passe" 
              class="w-full px-4 py-2 border border-[#D6C1A8] rounded-lg focus:outline-none focus:ring focus:ring-[#D6C1A8] text-[#3D2C1B]" 
            />
          </div>
  
          <div>
            <button 
              type="submit" 
              class="w-full bg-[#3D2C1B] hover:bg-[#D6C1A8] text-[#E8D8B3] font-semibold py-2 rounded-lg transition-colors duration-300">
              S'inscrire
            </button>
          </div>
        </form>
  
        <div class="my-6 flex items-center">
          <hr class="w-full border-[#D6C1A8]" />
          <span class="px-4 text-[#3D2C1B]">Ou</span>
          <hr class="w-full border-[#D6C1A8]" />
        </div>
  
       
  
        <p class="mt-6 text-center text-[#3D2C1B]">
          Vous avez déjà un compte ?
          <a href="#" class="font-semibold text-[#3D2C1B] hover:text-[#D6C1A8]">Connectez-vous</a>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SignupPage",
  };
  </script>
  
  <style scoped>
  button:hover {
    transform: scale(1.02);
  }
  </style>
  