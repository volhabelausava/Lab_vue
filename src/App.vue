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
    const response = await fetch('/api/users/0').then((resp) => resp.json());
    this.user = response.body;
    console.log('USER 0', { user: response.body });
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
