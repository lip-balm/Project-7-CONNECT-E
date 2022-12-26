<template>
  <div id="home">
    <h1>Welcome to the Groupomania employee forum, where you can connect with those around you.</h1>
    <h1>Find company in your company.</h1>
    <SignUp msg="We'll make this easy. Don't have an account? Fill in the below to sign up."/> 
    <SignIn msg="Already a member? Sign in below."/>
  </div>
</template>

<script>
// @ is an alias to /src
import SignUp from '@/components/SignUp.vue'
import SignIn from '@/components/SignIn.vue'

export default {
  name: 'HomeView',
  components: {
    SignUp,
    SignIn
  }
}
</script>

<style scoped lang="scss">

</style>
