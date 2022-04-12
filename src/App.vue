<template>
  <Header/>
  <main class="main">
    <router-view/>
  </main>
  <Footer/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

@Options({
  components: {
    TheHeader,
    TheFooter
  },
})
export default class App extends Vue {

}
</script>

<style lang="scss">
html, body {
  margin: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1 1 auto;
}
</style>
