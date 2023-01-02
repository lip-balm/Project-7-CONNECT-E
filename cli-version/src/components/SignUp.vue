<template>
  <div id="account">
    <h2>{{ msg }}</h2>
        <form @submit.prevent="onSubmit">
            <label>Employee ID <input class="textbox" type="number" min="100000" max="999999" v-model="employeeID" required placeholder="enter your 6 digit employee ID"></label>
            <label>Password <input class="textbox" type="password" v-model="password" required></label>
            <label>Name <input class="textbox" type="text" v-model="name" required placeholder="tell us who you are!"></label>
            <label>Bio <input class="textbox" type="text" v-model="bio" placeholder="this is optional but recommended"></label>
            <button @click="usersignup">Sign Up</button>
        </form>
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
           .then(data => {
              console.log('sign up 1', data);
            if (data.message == 'Account created successfully!') {
            alert('Your account has been created! Sign in to start connecting with your colleages.')
            this.$store.dispatch('setEmployeeId', data.employeeID);
            console.log('sign up check 1', data.employeeID);
            } else {
                alert('Either an account already exists with this employee ID or your name and/or password are missing. Please double check your input or contact the tech dept!');
              }
            })
           .then(json => {this.userInfo = json.data},)
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
  padding-top: 3px;
  width: 250px;
  height: 20px;
  border: 1px;
  border-style: solid;
  border-color: #fd2d01;
  border-radius: 7px;
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