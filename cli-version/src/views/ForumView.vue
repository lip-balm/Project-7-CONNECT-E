<template>
  <div id="forum"> 
    <ForumPosts msg="Let's see what everyone is up to..."/>
  </div>
</template>

<script>
// @ is an alias to /src
import ForumPosts from '@/components/ForumPosts.vue';

export default {
  name: 'ForumView',
  components: {
    ForumPosts,
  },

  methods() {
  
  },


}
</script>