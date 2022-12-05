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
        password: ''
      }
    }
  },
  methods: {
    usersignin: function() {
      fetch('http://localhost:3000/api/auth/signin', {
        method: 'POST',
        headers:{ 'Content-Type': 'application/json' },
        body: JSON.stringify({
          employeeID: this.employeeID,
          password: this.password,
        })
      })
           .then(response => { response.json();
           if (response.status == 200) {
            this.$router.push({ name: 'forum' });
           }
           })
           .then(data => console.log(data))
           .then(json => {this.userInfo = json.data})
           .catch(error => {
             this.error = error;
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
    flex-direction: vertical;
    gap: 10px;
    padding: 10px;
}

input {
  width: 250px;
}

button {
    margin: 12px;
    padding: 13px 10px 10px;
    color: #fd2d01;
    border-color: #fd2d01;
    height: 65px;
    width: 65px;
    border-radius: 50%;
    border: none;
    border-width: 5px;
    background-color: #fcd4d2;
}
</style>