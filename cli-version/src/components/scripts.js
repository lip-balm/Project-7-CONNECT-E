// CreatePost.vue

//original

{/* <script>
export default {
  name: 'CreatePost',
  data() {
    return {
      addedPost: {
        employeeID: '',
        date: '',
        name: '',
        postID: '',
        title: '',
        description: '',
        imageURL: '',
      }
    }
  },
  methods: {
    ifImgAdded(event) {
       this.imageURL = event.target.files[0]
       console.log(event.target.files[0]);
    },

    addPost: function () {
        fetch('http://localhost:3000/api/auth/forum', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.$store.state.token,
          },
          body: JSON.stringify({
            employeeID: this.$store.state.employeeId,
            name:  'add post checking name',
            title: this.title,
            description: this.description,
            imageURL: this.imageURL,
        })
        })
           .then(response => response.json())
           .then(data => {console.log(data)})
           .then(json => {this.addedPost = json.data},)
           .catch(error => {
             this.error = error;
          });
  },
  }
}
</script> */}

// test 1 
{/* <script>
export default {
  name: 'CreatePost',
  data() {
    return {
      addedPost: {
        employeeID: '',
        date: '',
        name: '',
        postID: '',
        title: '',
        description: '',
      },
      imageURL: '',
    }
  },
  methods: {
    ifImgAdded(event) {
       this.imageURL = event.target.files[0]
       console.log(this.imageURL);
    },

    addPost: function () {
      let formData = new FormData();
      formData.append('title', this.addedPost.title)
      formData.append('employeeID', this.$store.state.employeeId,)
      formData.append('description', this.addedPost.description)
      formData.append('image', this.imageURL),

        fetch('http://localhost:3000/api/auth/forum', {
          method: 'POST',
          mode: 'no-cors', // gave cors error so added this but still doesnt work
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.$store.state.token,
          },
          body: formData,
        })
           .then(response => response.json())
           .then(data => {console.log(data)})
           .then(json => {this.addedPost = json.data},)
           .catch(error => {
             this.error = error;
          });
  },
  }
}
</script> */}


// AllPosts.vue

// trying to get comments
// mounted() {
//   fetch('http://localhost:3000/api/auth/forum/post/' + this.postID + '/comments', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer ' + this.$store.state.token,
//     },
//   })
// .then(res => res.json())
// .then(data => this.comments = data)
// .then(data => console.log('all comments', data))
// .catch(err => console.log(err.message))
// },


// this is the whole menthod to very last {

  // methods: {
  //   usersignin: function () {
  //     fetch('http://localhost:3000/api/auth/signin', {
  //       method: 'POST',
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify({
  //         employeeID: this.employeeID,
  //         password: this.password,
  //         name: this.name
  //       })
  //     })
  //         .then(res => res.json())
  //         .then(data => {
  //           console.log(data);
  //           this.$store.dispatch('setEmployeeId', data.employeeID);
  //           this.$store.dispatch('setToken', data.token);
  //           this.$store.dispatch('setName', data.name);
  //           this.$router.push({name: 'forum'})
  //         })
  //         .catch(error => {
  //           this.error = error;
  //           console.log(error);
  //         });
  //   },
  // }
  // }

  //v-bind:class="post.readBy.includes(this.$store.state.employeeId) ? 'read' : null">Read</button>

  // v-if="(!post.readBy) || (!post.readBy.includes(employeeID))"

  //         <button class="smallButton" @click="markAsRead(post.postID)" v-bind:class="{ 'read' : readPost }">Read</button>