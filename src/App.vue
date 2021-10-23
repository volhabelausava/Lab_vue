<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <IndexPage :title="userFullName" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import IndexPage from '@/pages/IndexPage.vue';

@Options({
  components: {
    IndexPage,
  },
})
export default class App extends Vue {
  user: any = null;

  async mounted(): Promise<void> {
    /*  Example of user creating */
    const userCreationResponse = await fetch('/api/users/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        login: 'NewUser',
        role: 'USER',
        first_name: 'Mark',
        last_name: 'Stivenson',
        password: '232323',
        sex: 'MALE'
      })
    }).then((response) => response.json());
    /*  Example of user editing */
    await fetch('/api/users/update', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: userCreationResponse.body,
        first_name: 'Steven',
      })
    });
    /*  Example of user fetching  */
    const resp = await fetch('/api/users/2').then((response) => response.json());

    this.user = resp.body || null;
  }

  get userFullName() {
    return this.user
      ? `Default user: ${this.user.first_name} ${this.user.last_name}`
      : ''
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
