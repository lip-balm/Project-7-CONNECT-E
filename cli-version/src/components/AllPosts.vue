<template>
  <div id="allPostsShown">
    <div class="postCard" v-for="post in posts" :key="post.postID">
      <p class="postAuthor"> {{ post.name }} ({{ post.employeeID }}) said </p>
      <p class="postDate"> {{ post.date }} </p>
        <section class="postContent">
          <p class="postTitle"> {{ post.title }} </p>
          <p class="postDescription"> {{ post.description }} </p>
        </section>
        <section class="postComment">
          <button @click="postDelete" v-if="this.$store.state.employeeId === post.employeeID">Delete Post</button>
          <input class="textbox" placeholder="start typing your comment here...">
          <button @click="addComment">Comment</button>
        </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllPosts',

  data() {
    return {
      posts: [],
    }
  },

  created() {
      fetch('http://localhost:3000/api/auth/forum', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.$store.state.token,
        },
      })
    .then(res => res.json())
    .then(data => this.posts = data)
    .then(data => console.log('all posts', data))
    .catch(err => console.log(err.message))
  },

  methods: {
      postDelete() {
      fetch('http://localhost:3000/api/auth/forum/post', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.$store.state.token,
        },
            })
        .then(res => res.json())
        .then(data => console.log(data)) 
        .catch(error => {this.error = error;
                        console.log(error);
        });
    }
  }

}
</script>

<style scoped lang="scss">
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
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

input {
  border-style: none;
  width: 65%;
  height: 100px;
  margin: 0;
}
</style>