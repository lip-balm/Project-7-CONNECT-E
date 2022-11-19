<template>
  <div class="home">
    <img alt="Groupomania logo" src="../assets/images/icon-above-font.png">
    <AboutUs msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutUs from '@/components/AboutUs.vue'

export default {
  name: 'HomeView',
  components: {
    AboutUs
  }
}
</script>

<style scoped lang="scss">
  img {
    width: 38%
    }
</style>
