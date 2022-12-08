<template>
    <div class="forum">
      <h2>{{ msg }}</h2>
      <div class="allTheButtons"> 
        <button @click="getAllPosts">Refresh All Posts</button>
        <button @click="getSomeonesPosts">See Someone's Posts</button>
        <button @click="createPost">Create a Post</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ForumPosts',
  props: {
    msg: String
  },

  data() {

  },

  methods: {

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
</style>
