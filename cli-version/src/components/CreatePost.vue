<template>
  <form id="uploadForm" enctype="multipart/form-data">
      <label>Title<input v-model="title" class="textbox" required></label>
      <label>Description <textarea v-model="description" class="textboxDesc" required> </textarea></label>
      <label>Image <input type="file" @change="ifImgAdded"></label>   then add it to payload then append it to the body/form data and backend needs to accept 
  </form>
  <button @click="addPost">Upload Post</button>
</template>

<script>
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
      },
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
           .then(data => {
              console.log(data);
              this.$router.push({name: 'forum'})
              })
           .then(json => {this.addedPost = json.data},)
           .catch(error => {
             this.error = error;
          });
  },
  }
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
  margin: auto;
}

#uploadForm {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-bottom: 20px;
}

label {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 10px;
}

.textbox {
  padding-top: 3px;
  width: 350px;
  height: 20px;
  border: 1px;
  border-style: solid;
  border-color: #fd2d01;
  border-radius: 7px;
}

.textboxDesc {
  width: 350px;
  height: 100px;
  border: 1px;
  border-style: solid;
  border-color: #fd2d01;
  border-radius: 7px;
}

</style>
