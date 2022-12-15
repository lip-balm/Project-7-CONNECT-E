<template>
  <h2>Looking for someone's profile? Search their employee ID below!</h2>
  <div class="search">
    <input class="IDbox" placeholder="whose profile would you like to see? (enter ID)" v-model="userInfo">
    <button @click="getSomeonesProfile">Get Profile</button>
  </div>
  <div v-if="display">
    <p class='wantedName'> <span>Name: {{ userInfo.name }}</span> <span> Employee ID: {{ userInfo.employeeID }} </span> </p>
    <p id='bioField'> About Me: {{ userInfo.bio }} </p>
  </div>
</template>

<script>
export default {
  name: 'someonesProfile',
  props: {
    msg: String
  },

  data() {
    return {
      userInfo: '',
      display: false,
      error: '',
    };
  },

  methods: {
    getSomeonesProfile: function() {
      fetch('http://localhost:3000/api/auth/profile/' + this.userInfo, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.$store.state.token,
        },
      })
          .then(res => res.json(),
                this.display=true,)
          .then(res => {
            console.log('someones profile check', res);
            this.userInfo = res;
          })
          .catch(error => {
            this.error = error;
            console.log(error);
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

.search {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

button {
    color: #fd2d01;
    border-color: #fd2d01;
    height: 75px;
    width: 75px;
    border-radius: 50%;
    border: none;
    background-color: #fcd4d2;
}

.IDbox {
  width: 275px;
  height: 25px;
  border: 1px;
  border-style: solid;
  border-color: #fd2d01;
  border-radius: 10px;
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
  margin: auto;
  margin-bottom: 30px;
  justify-content: space-between;
}

.wantedName {
  text-align:justify;
}

#bioField {
  height: 100px
}

</style>


// create table comments (employeeID INTEGER(6), name VARCHAR(255), postID INTEGER, commentID INTEGER AUTO_INCREMENT, comment TEXT, date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, PRIMARY KEY (commentID));