<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <IndexPage :title="userFullName" />
  <ApiDemoPage />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import IndexPage from '@/pages/IndexPage.vue';
import ApiDemoPage from '@/pages/ApiDemoPage.vue';

@Options({
  components: {
    IndexPage,
    ApiDemoPage
  },
})
export default class App extends Vue {
  user: any = null;

  async mounted(): Promise<void> {
    const resp = await fetch('http://localhost:3000/users/1').then((response) => response.json());
    this.user = resp || null;
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
