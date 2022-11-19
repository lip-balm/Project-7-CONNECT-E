<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/profile">Profile</router-link> |
    <router-link to="/forum">Employee Forum</router-link>
  </nav>
  <router-view/>
</template>


// protected views and routes or maybe hide nav based on log in

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #000000;
    padding: 20px;

    &.router-link-exact-active {
      color: #fd2d01;
    }
  }
}
</style>
