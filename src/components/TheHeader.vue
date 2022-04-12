<template>
  <header class="header">
    <h1>Games Store</h1>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Products' }">Products</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
    </nav>
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  background-color: #121211;
  color: #E2E2E2;

  h1 {
    font-size: 30px;
    margin: 15px 20px;
  }

  nav {
    display: flex;
    align-items: stretch;

    a {
      display: flex;
      align-items: center;
      padding: 0 20px;
      font-size: 18px;
      text-decoration: none;
      color: #E2E2E2;
      border-bottom: solid 4px #121211;

      &.router-link-exact-active, &:hover, &:focus {
        background-color: #272727;
        border-bottom: solid 4px #9D5DCD;
      }

      &:focus, &:hover {
        outline: none;
        color: #9D5DCD;
      }

      &.router-link-exact-active:focus {
        color: #E2E2E2;
      }
    }
  }
}

</style>
