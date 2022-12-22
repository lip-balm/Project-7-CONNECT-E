<template>
  <div id="allPostsShown">
    <div class="postCard" v-for="post in posts" :key="post.postID" > 
      <section class="postCardTopDetails">
        <section class="topDetails">
        <p class="postAuthor"> Employee ID {{ post.employeeID }} said: </p> 
        <p class="postDate"> {{ post.date }} </p>
        </section>
        <button class="smallButton" @click="markAsRead(post.postID)" v-bind:class="{ 'read' : readPost }">Read</button>
      </section>
      <section class="postContent">
        <p class="postTitle"> {{ post.title }} </p>
        <p class="postDescription"> {{ post.description }} </p>
        <img class="postimgs" v-if="post.imageURL != 'null'" :src="post.imageURL">
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
  name: 'AllPosts',

  data() {
    return {
      posts: [],
      comments: [],
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
    postDelete(postID) {
      console.log('checking for delete event', postID),
      fetch('http://localhost:3000/api/auth/forum/post', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.$store.state.token,
        },
      body: JSON.stringify({
            postID: postID,
        })
            })
        .then(res => res.json())
        .then(data => console.log(data)) 
        .catch(error => {this.error = error;
                        console.log(error);
        });
    },

    addComment(postID) {
      console.log('is add comment working', this.comment),
        fetch('http://localhost:3000/api/auth/forum/post/' + postID + '/addComment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.$store.state.token,
          },
          body: JSON.stringify({
            employeeID: this.$store.state.employeeId,
            comment: this.comment,
        })
        })
           .then(response => response.json())
           .then(data => console.log(data),
            )
           .then(json => {this.comments = json.data},)
           .catch(error => {
             this.error = error;
          });
  },
  
    commentDelete(commentID) {
      console.log('checking for comment delete event', commentID),
      fetch('http://localhost:3000/api/auth/forum/post/deleteComment', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.$store.state.token,
        },
      body: JSON.stringify({
            commentID: commentID,
        })
            })
        .then(res => res.json())
        .then(data => console.log(data)) 
        .catch(error => {this.error = error;
                        console.log(error);
        });
    },

    markAsRead(postID) {
        fetch('http://localhost:3000/api/auth/forum/post/' + postID + '/read', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.$store.state.token,
          },
          body: JSON.stringify({
            employeeID: this.$store.state.employeeId,
            readPost: true,
        })
        })
           .then(response => response.json())
           .then(data => console.log(data),
            )
           .then(json => json.data)
           .catch(error => {
             this.error = error;
          });
  },

  },
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
  height: 100%;
}

.postAuthor, .postDate, .commentDate, .commentAuthor {
// color: #fd2d01;
  text-align: left;
  margin: 8px 8px 0px 8px;
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

.allComments {
  display: flex;
  flex-direction: row;
  text-align: center;
  gap: 10px;
}

.postComment {
  display: flex;
  justify-content: center;
}

button {
  color: #fd2d01;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: none;
  background-color: #fcd4d2;
  margin: 10px;
}

.smallButton {
    height: 35px;
    width: 35px;
    font-size: 10px;
    padding: 0;
}

.read {
  color: #fcd4d2;
  background-color: #fd2d01;
}

input {
  border-style: none;
  width: 40%;
  height: 100px;
  margin: 0;
}

.postCardTopDetails {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media all and (max-width: 480px) {
  #allPostsShown {
    flex-direction: column;
    row-gap: 20px;
  }

  .postCard {
    width: 95%;
    margin: auto;
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