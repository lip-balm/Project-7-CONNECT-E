<template>
  <div class="home">
    <img alt="Groupomania logo" src="../assets/images/icon-above-font.png">
    <AboutUs msg="Welcome to our employee portal"/>
    <MyProfile/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutUs from '@/components/AboutUs.vue'
import MyProfile from '@/components/MyProfile.vue'

export default {
  name: 'HomeView',
  components: {
    AboutUs
  }
}
</script>

<style scoped lang="scss">
  img {
    width: 30%
    }
</style>
