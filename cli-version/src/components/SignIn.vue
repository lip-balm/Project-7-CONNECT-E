<template>
  <div id="account">
    <h2>{{ msg }}</h2>
        <div>
            <label>Employee ID <input class="textbox" type="number" min="100000" max="999999" v-model="employeeID" required></label>
            <label>Password <input class="textbox" type="password" v-model="password" required></label>
            <button @click="usersignin">Sign In</button>
        </div>
  </div>
</template>

<script>

export default {
  name: 'SignIn',

  props: {
    msg: String
  },

  data() {
    return {
      userInfo: {
        employeeID: '',
        password: '',
      }
    }
  },

  
  methods: {
    usersignin: function () {
      fetch('http://localhost:3000/api/auth/signin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          employeeID: this.employeeID,
          password: this.password,
        })
      })
          .then(res => res.json())
          .then(data => {
            if(data.employeeID && data.token) {
              console.log(data);
              this.$store.dispatch('setEmployeeId', data.employeeID);
              this.$store.dispatch('setToken', data.token);
              this.$router.push({name: 'forum'})
            } else {
              alert('Incorrect or empty log in details! If needed, please contact the tech department to reset your password.');
              }
            })
          .catch(error => {
            this.error = error;
            console.log(error);
          });
    },
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-weight: bold;
}

label {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 10px;
}

.textbox {
  padding-top: 3px;
  width: 250px;
  height: 20px;
  border: 1px;
  border-style: solid;
  border-color: #fd2d01;
  border-radius: 7px;
}

input {
  width: 250px;
}

button {
    margin: 12px;
    padding: 19px 15px 15px;
    color: #fd2d01;
    border-color: #fd2d01;
    height: 75px;
    width: 75px;
    border-radius: 50%;
    border: none;
    border-width: 5px;
    background-color: #fcd4d2;

  &:hover {
    color: #ffffff;
    background-color: #fd2d01;
  }
}

@media all and (max-width: 480px) {
  h2 {
    font-size: 16px;
  }

  .textbox {
    width: 200px;
  }
}

</style>