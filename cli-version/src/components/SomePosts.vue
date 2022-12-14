<template>
  <div>
    <input class="IDbox" placeholder="whose posts would you like to see? (enter ID)" v-model="wantedEmployeeID">
    <button @click="getSomeonesPosts">Get Posts</button>
  </div>
  <div id="allPostsShown" v-if="display">
    <div class="postCard" v-for="post in posts" :key="post.postID">
      <p class="postAuthor"> {{ post.name }} ({{ post.employeeID }}) said </p>
      <p class="postDate"> {{ post.date }} </p>
        <section class="postContent">
          <p class="postTitle"> {{ post.title }} </p>
          <p class="postDescription"> {{ post.description }} </p>
        </section>
        <section class="postComment">
          <button @click="postDelete" v-if="this.$store.state.employeeId === post.employeeID">Delete Post</button>
          <input class="textbox" placeholder="start typing here...">
          <button @click="addComment">Comment</button>
        </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SomePosts',

  data() {
    return {
      posts: [],
      wantedEmployeeID: '',
      display: false,
    }
  },

  methods: {
    getSomeonesPosts: function() {
      fetch('http://localhost:3000/api/auth/forum/post/' + this.wantedEmployeeID, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.$store.state.token,
        },
      })
    .then(res => res.json(),
                  console.log('wanted employee', this.wantedEmployeeID),
                  this.display=true,)
    .then(data => this.posts = data)
    .then(data => console.log('some posts', data))
    .catch(err => console.log(err.message))
  }
}



}
</script>

<style scoped lang="scss">
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
}

button {
  color: #fd2d01;
  border-color: #fd2d01;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: none;
  background-color: #fcd4d2;
  margin: 10px;
}

.IDbox {
  width: 275px;
  height: 25px;
  border: 1px;
  border-style: solid;
  border-color: #fd2d01;
  border-radius: 10px;
  margin: 0px 10px 10px 10px;
}

#allPostsShown {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 50px;
}
.postCard {
  border: 1px;
  border-style: solid;
  border-color: #fd2d01;
  border-radius: 10px;
  width: 45%;
}

.postAuthor, .postDate {
  color: #fd2d01;
  text-align: left;
  margin: 8px 8px 6px 8px;
}

.postDate {
  margin-top: 0px;
  font-size: 10px;
}

.postTitle {
  font-size: 18px;
  margin: 10px;
}

.postDescription {
  margin: 10px;
}

.postContent, .postComment {
  border: 1px;
  border-style: solid;
  border-color: #fd2d01;
  border-radius: 10px;
  margin: 0px 10px 10px 10px;
}

.postComment {
  display: flex;
  justify-content: center;
}

button {
  color: #fd2d01;
  border-color: #fd2d01;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: none;
  background-color: #fcd4d2;
  margin: 10px;
}

.textbox {
  border-style: none;
  width: 65%;
  height: 100px;
  margin: 0;
}
</style>