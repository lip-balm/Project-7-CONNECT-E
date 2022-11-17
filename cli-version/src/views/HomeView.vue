<template>
  <div class="home">
    <img alt="Groupomania logo" src="../assets/images/icon-above-font.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped lang="scss">
  img {
    width: 38%
    }
</style>
