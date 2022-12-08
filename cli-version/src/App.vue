<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/profile" @click="userprofile">My Profile</router-link> |
    <router-link to="/forum">Employee Forum</router-link>
  </nav>
      <img alt="Groupomania logo" src="./assets/images/icon-above-font.png">
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h1 {
  font-size: 26px;
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

img {
    width: 15%
  }

button {
  font-size: 15px;
  color: #000000;
  margin: 10px

  &active {
    color: #fd2d01;
  }
}
</style>
