// create postMessage

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
      const formData1 = new FormData();
      formData1.append('title', this.addedPost.title)
      formData1.append('employeeID', this.$store.state.employeeId,)
      formData1.append('description', this.addedPost.description)
      formData1.append('image', this.imageURL),

        fetch('http://localhost:3000/api/auth/forum', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.$store.state.token,
          },
          body: formData1,
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
