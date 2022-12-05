<template>
  <div id="account">
    <h2>{{ msg }}</h2>
        <div>
            <label>Employee ID <input class="textbox" type="number" min="100000" max="999999" v-model="employeeID" required placeholder="this would be your 6 digit employee ID"></label>
            <label>Password <input class="textbox" type="password" v-model="password" required></label>
            <label>Name <input class="textbox" type="text" v-model="name" required placeholder="this will be your display name"></label>
            <label>Bio <input class="textbox" type="text" v-model="bio" placeholder="this is optional but recommended"></label>
            <button @click="usersignup">Sign Up</button>
        </div>
  </div>
</template>


<script>
export default {
    name: 'SignUp',
    props: {
    msg: String
  },
  data() {
    return {
      userInfo: {
        employeeID: '',
        password: '',
        name: '',
        bio: '',
      }
    }
  },
  methods: {
    usersignup: function() {
      fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers:{ 'Content-Type': 'application/json' },
        body: JSON.stringify({
          employeeID: this.employeeID,
          password: this.password,
          name:  this.name,
          bio: this.bio,
        })
      })
           .then(response => response.json())
           .then(data => console.log(data))
           .then(json => {this.userInfo = json.data},
                          this.$router.push({ name: "profile" }))
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
    gap: 10px;
    padding: 10px;
}

.textbox {
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