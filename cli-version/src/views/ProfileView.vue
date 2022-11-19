<template>
  <div id="profile">
    <MyProfile msg="Welcome to your profile!"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import MyProfile from '@/components/MyProfile.vue'

export default {
  name: 'ProfileView',
  components: {
    MyProfile
  }
}
</script>