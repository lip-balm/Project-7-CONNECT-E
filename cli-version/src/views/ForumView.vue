<template>
  <div id="forum"> 
    <h1>Let's see what everyone is up to...</h1>
      <div class="allTheButtons"> 
        <button @click="activeTab = 'AllPosts', getPosts()">See All Posts</button>
        <button @click="activeTab = 'SomePosts'">See Someone's Posts</button>
        <button @click="activeTab = 'CreatePost'">Create a Post</button>
      </div>
      <component :is="activeTab" />
  </div>
</template>

<script>
// @ is an alias to /src
import AllPosts from '@/components/AllPosts.vue';
import SomePosts from '@/components/SomePosts.vue';
import CreatePost from '@/components/CreatePost.vue';

export default {
  name: 'ForumView',

  components: {
    AllPosts,
    SomePosts,
    CreatePost,
  },

  data() {
    return {
      activeTab: 'AllPosts',
    }
  },

}
</script>

<style scoped lang="scss">

* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
}

.allTheButtons {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-bottom: 25px;
}

button {
  color: #fd2d01;
  border-color: #fd2d01;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: none;
  background-color: #fcd4d2;
}

@media all and (max-width: 480px) {
  .allTheButtons {
    gap: 18px;
  }

}

</style>
