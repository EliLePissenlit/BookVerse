<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');
    const error = ref('');

    const login = async () => {
      try {
        const response = await fetch('https://api.realworld.io/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: {
              email: email.value,
              password: password.value
            }
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('JWT:', data.user.token);
        localStorage.setItem('jwt', data.user.token);
      } catch (err) {
        error.value = 'Failed to login: ' + err.message;
      }
    };

    return { email, password, login, error };
  }
});
</script>
