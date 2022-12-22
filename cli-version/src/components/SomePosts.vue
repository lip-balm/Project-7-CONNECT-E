<template>
  <div>
    <input class="IDbox" placeholder="whose posts would you like to see? (enter ID)" v-model="wantedEmployeeID">
    <button @click="getSomeonesPosts">Get Posts</button>
  </div>
  <div id="allPostsShown">
    <div class="postCard" v-for="post in posts" :key="post.postID" > 
      <section class="postCardTopDetails">
        <section class="topDetails">
        <p class="postAuthor"> Employee ID {{ post.employeeID }} said: </p> 
        <p class="postDate"> {{ post.date }} </p>
        </section>
        <button class="smallButton" @click="markAsRead">Read</button>
      </section>
      <section class="postContent">
        <p class="postTitle"> {{ post.title }} </p>
        <p class="postDescription"> {{ post.description }} </p>
        <img class="postimgs" v-if="post.imageURL != null" :src="post.imageURL">
      </section>
        <section class="postComment">
        <button @click="postDelete(post.postID)" v-if="this.$store.state.employeeId === post.employeeID">Delete Post</button>
        <input class="textbox" placeholder="start typing here..." v-model="comment">
        <button @click="addComment(post.postID)">Comment</button>
      </section>
      <section class="allComments"  v-for="comment in comments.filter(comment => comment.postID == post.postID)" :key="comment.commentID">
      <section>
        <p class="commentAuthor">Employee ID {{ comment.employeeID }} commented: </p>
        <p class="commentDate"> {{ comment.date }} </p>
      </section>
        <button @click="commentDelete(comment.commentID)" class="smallButton" v-if="this.$store.state.employeeId === comment.employeeID">Delete</button>
        <p class="commentText"> {{ comment.comment }} </p>
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
      comments: [],
      wantedEmployeeID: '',
      display: false,
    }
  },

  mounted(postID) {
    fetch('http://localhost:3000/api/auth/forum/post/' + postID + '/allComments', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.$store.state.token,
      },
    })
  .then(res => res.json())
  .then(data => this.comments = data)
  .then(data => console.log('all comments1', data))
  .catch(err => console.log(err.message))
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
  },
},
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
  margin-top: 30px;
  border: 1px;
  border-style: solid;
  border-color: #fd2d01;
  border-radius: 10px;
  width: 45%;
}

.postAuthor, .postDate, .commentDate, .commentAuthor {
//  color: #fd2d01;
  text-align: left;
  margin: 8px 8px 6px 8px;
}

.postDate, .commentDate {
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

.postContent, .postComment, .allComments {
  border: 1px;
  border-style: solid;
  border-color: #fd2d01;
  border-radius: 10px;
  margin: 0px 10px 10px 10px;
}

.postCardTopDetails {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.allComments {
  display: flex;
  flex-direction: row;
  text-align: center;
  gap: 10px;
}

.smallButton {
    height: 35px;
    width: 35px;
    font-size: 10px;
    padding: 0;
}

.postComment {
  display: flex;
  justify-content: center;
}

.postComment {
  display: flex;
  justify-content: center;
}

.textbox {
  border-style: none;
  width: 40%;
  height: 100px;
  margin: 0;
}

@media all and (max-width: 480px) {
  #allPostsShown {
    flex-direction: column;
    row-gap: 20px;
  }

  .postCard {
    width: 95%;
    margin: auto;
    margin-top: 10px;
  }

  .postTitle {
    font-size: 16px;
  }

  .postDescription {
    font-size: 14px;
}

.allComments {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  gap: 10px;
}

.commentText {
  margin: 8px
}

}

</style>