<template>
  <div id="profile">
    <h1>Welcome to your profile!</h1>    
        <h1>{{ msg }}</h1>
        <h2 id= 'nameField'>Hi {{ userInfo.name }},</h2>
        <p id='IDField'>Employee ID: {{ userInfo.employeeID }}</p>
        <p id='bioField'>About Me: {{ userInfo.bio }} </p>
        <button id="editbutton" @click="profileEdit">Edit Profile</button>
        <button @click="userSignOut">Sign Out</button>

  </div>
</template>

<script>
export default {
  name: 'ProfileView',
  components: {},

  data() {
    return {
      userInfo: {
        name: '',
        employeeID: '',
        bio: '',
      },
      error: '',
    };
  },
  created() {
      fetch('http://localhost:3000/api/auth/profile/' + this.$store.getters.getEmployeeId, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.$store.getters.getToken,
        },
      })
          .then(res => res.json())
          .then(res => {
            console.log(res);
            this.userInfo = res;
          })
          .catch(error => {
            this.error = error;
            console.log(error);
          });
    },

  methods: {
    userSignOut() {
      this.$router.push({name: 'home'})
      this.$store.commit('signout')
    }
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

button {
    margin: 12px;
    padding: 13px 10px 10px;
    color: #fd2d01;
    border-color: #fd2d01;
    height: 75px;
    width: 75px;
    border-radius: 50%;
    border: none;
    border-width: 5px;
    background-color: #fcd4d2;
}

#editbutton {
  padding: 8px 10px 10px;
}

</style>