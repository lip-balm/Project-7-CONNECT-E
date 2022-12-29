<template>
  <div id="allPostsShown">
    <div class="postCard" v-for="post in posts" :key="post.postID" > 
      <section class="postCardTopDetails">
        <section class="topDetails">
        <p class="postAuthor"> Employee ID {{ post.employeeID }} said: </p> 
        <p class="postDate"> {{ post.date }} </p>
        </section>
        <button class="readButton read" v-if="post.readBy && post.readBy.includes(this.$store.state.employeeId)">Read</button>
        <button class="readButton" @click="markAsRead(post.postID)" v-else>Mark as Read</button>
      </section>
      <section class="postContent">
        <p class="postTitle" v-if="post.title !='undefined'"> {{ post.title }} </p>
        <p class="postDescription" v-if="post.description !='undefined'"> {{ post.description }} </p>
        <img class="postimgs" v-if="post.imageURL != 'null'" :src="post.imageURL">
      </section>
      <section class="postComment">
        <button @click="postDelete(post.postID)" v-if="this.$store.state.employeeId === post.employeeID">Delete Post</button>
        <textarea class="textbox" placeholder="start typing here..." v-model="comment"></textarea>
        <button @click="addComment(post.postID)">Comment</button>
      </section>
      <section class="allComments"  v-for="comment in comments.filter(comment => comment.postID == post.postID)" :key="comment.commentID">
      <section class="commentorDetails">
        <p class="commentAuthor">Employee ID {{ comment.employeeID }} commented: </p>
        <p class="commentDate"> {{ comment.date }} </p>
      </section>
        <button @click="commentDelete(comment.commentID)" class="smallButton" v-if="this.$store.state.employeeId === comment.employeeID">Delete</button>
        <p class="commentText"> {{ comment.comment }} </p>
      </section>
    </div>
  </div>
  <button @click="goToTop" id="topButton" v-scroll="onScroll">Back to Top</button>
</template>

<script>
export default {
  name: 'AllPosts',

  data() {
    return {
      posts: [],
      comments: [],
      readPost: false,
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
        .then(data => console.log(data),
            alert('This post has been deleted.')) 
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
                alert('Comment added!')
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
        .then(data => console.log(data),
          this.comments.splice(commentID),
          alert('Your comment has been deleted.')) 
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

  goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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

.postAuthor, .postDate {
// color: #fd2d01;
  text-align: left;
  margin: 13px 8px 0px 8px;
}

.commentDate, .commentAuthor {
  text-align: left;
  margin: 0px 8px 0px 8px;
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
  border-style: dashed;
  border-color: #fd2d01;
  border-radius: 10px;
  margin: 0px 10px 10px 10px;
}

.postComment {
    justify-content: space-between
}

.allComments {
  display: flex;
  flex-direction: row;
  text-align: center;
}

.postComment {
  display: flex;
  justify-content: center;
}

button {
  color: #fd2d01;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: none;
  background-color: #fcd4d2;
  margin: 10px;
  font-size: 13px;
}

.smallButton {
    height: 40px;
    width: 45px;
    font-size: 10px;
    border-radius: 10px;
    margin: auto;
}

.readButton {
    height: 40px;
    width: 45px;
    font-size: 10px;
    padding: 0;
    border-radius: 10px;
}

.read {
  color: #fd2d01;
  background-color: #ffffff;
  border-style: solid;
  border-width: 1px;
  border-color: #fd2d01;
}

textarea {
  border-style: none;
  width: 40%;
  margin: 0;
}

.postCardTopDetails {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#topButton {
  bottom: 10px;
  position: fixed;
  color: #ffffff;
  background-color: #fd2d01;
  height: 60px;
  width: 60px;
  padding-top: 5px;
  font-size: 12px;
}

.commentText {
  width: 80%;
  padding: 5px;
}

.commentorDetails {
  margin: auto;
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
}

#topButton {
  bottom: 10px;
  right: 40%;
}

.commentText {
  margin: 8px
}

.smallButton {
  margin: 10px;
}

}
</style>