<template>
  <div id="home">
    <img alt="Groupomania logo" src="../assets/images/icon-above-font.png">
    <h1>Welcome to the Groupomania employee forum, where you can connect with those around you. </h1>
    <AboutUs msg="Find company in your company."/>
    <SignUpOrIn msg="We'll make this easy. 1. Fill in the below. 2. Either sign in or up for an account with the inputted details."/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutUs from '@/components/AboutUs.vue'
import SignUpOrIn from '@/components/SignUpOrIn.vue'

export default {
  name: 'HomeView',
  components: {
    AboutUs,
    SignUpOrIn
  }
}
</script>

<style scoped lang="scss">
  img {
    width: 18%
    }
</style>
