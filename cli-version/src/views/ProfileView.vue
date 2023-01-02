<template>
  <div id="profile">
    <h1>Welcome to your profile!</h1>    
        <h1>{{ msg }}</h1>
        <h2 id= 'nameField'>Hi {{ userInfo.name }},</h2>
        <p id='IDField'>Employee ID: {{ userInfo.employeeID }}</p>
        <p id='bioField'>About Me: {{ userInfo.bio }} </p>
        <button @click="userDelete">Delete Profile</button>
        <button @click="userSignOut">Sign Out</button>
  </div>
  <someonesProfile/>
</template>

<script>
import someonesProfile from '@/components/someonesProfile.vue';

export default {
  name: 'ProfileView',
  components: {someonesProfile,},

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
      fetch('http://localhost:3000/api/auth/profile/' + this.$store.state.employeeId, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.$store.state.token,
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
    },
    
    userDelete() {
      fetch('http://localhost:3000/api/auth/profile/' + this.$store.state.employeeId, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.$store.state.token,
        },
            })
        .then(res => res.json())
        .then(data => console.log(data),
          this.$router.push({name: 'home'}),
          this.$store.commit('signout')) 
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
  height: 100px
  }

button {
    margin: 10px 100px;
    padding: 15px;
    color: #fd2d01;
    border-color: #fd2d01;
    height: 75px;
    width: 75px;
    border-radius: 50%;
    border: none;
    background-color: #fcd4d2;

  &:hover {
    color: #ffffff;
    background-color: #fd2d01;
  }
}

@media all and (max-width: 480px) {
  .profile, p {
    width: 90%
  }

  button {
    margin: 5px 50px;
  }
}

</style>