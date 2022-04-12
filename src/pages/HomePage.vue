<template>
    <Greeting :title="userFullName" />
    <ApiDemo />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Greeting from '@/components/Greeting.vue';
import ApiDemo from '@/components/ApiDemo.vue';

@Options({
  components: {
    Greeting,
    ApiDemo,
  },
})

export default class HomePage extends Vue {
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
