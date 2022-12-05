<template>
  <div id="profile">
    <h1>Welcome to your profile!</h1>    
        <h1>{{ msg }}</h1>
        <h2 id= 'nameField'>Hi {{ this.userInfo.name }},</h2>
        <p id='IDField'>Employee ID: {{ userInfo.employeeID }}</p>
        <p id='bioField'>About Me: {{ userInfo.bio }} </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProfileView',
  components: {
  },

data() {
    return {
      userInfo: {
        loading: false,
        name: this.name,
        employeeID: this.employeeID,
        bio: this.bio,
      }
      };
    },

mounted() {
    axios.get('http://localhost:3000/api/auth/profile/:employeeID', {
      headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
        }
    })
    .then(response => {this.userInfo = response.data.userInfo})
    .catch((error) => console.log(error));
  }
}  

</script>

<style scoped lang="scss">
* {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
}

h1 {
  color: #fd2d01;
}

p {
  border: 1px;
  border-style: solid;
  border-color: #fd2d01;
  border-radius: 10px;
  width: 800px;
  text-align: left;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 30px;
  vertical-align: top;
  gap: 30px;
}

#bioField {
  height:200px
  }

</style>