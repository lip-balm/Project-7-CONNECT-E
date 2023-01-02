<template>
  <form id="uploadForm" @submit.prevent="onSubmit" enctype="multipart/form-data">
      <label>Title<input v-model="title" class="textbox" required></label>
      <label>Description <textarea v-model="description" class="textboxDesc" required> </textarea></label>
      <label>Image <input type="file" @change="ifImgAdded"></label>
      <button  @click="addPost">Upload Post</button>
  </form>
</template>

<script>
export default {
  name: 'CreatePost',
  data() {
    return {
      addedPost: {
        employeeID: '',
        date: '',
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
    const data = {
      employeeID: this.$store.state.employeeId,
      title: this.title,
      description: this.description,
    };
    const formData = new FormData();
    if (this.imageURL != null) {
      formData.append('image', this.imageURL, this.imageURL.name);
    }
    formData.append('data', JSON.stringify(data));
    fetch('http://localhost:3000/api/auth/forum', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Authorization': 'Bearer ' + this.$store.state.token,
      },
      body: formData
    })
        .then(response => response.json())
        .then(data => {
            console.log('post data1', this.title),
                console.log('post data2', data.title),
                alert('Success :) Click See All Posts to check out your new post.')
        })
        .then(json => {this.addedPost = json.data},)
        .catch(error => {
          console.log('ERROR!!!', error);
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

button {
  color: #fd2d01;
  border-color: #fd2d01;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: none;
  background-color: #fcd4d2;
  margin: auto;
  margin-top: 20px;

  &:hover {
    color: #ffffff;
    background-color: #fd2d01;
  }
}

#uploadForm {
  display: flex;
  flex-direction: column;
  align-content: center;
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
