<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <IndexPage msg="112" />
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
  users: any;

  async mounted(): Promise<void> {
    const users = await fetch('/api/users/0').then((resp) => resp.json());
    this.users = users;
    console.log({ users: this.users });
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
