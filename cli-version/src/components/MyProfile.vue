<template>
    <div class="profile">
        <h1>Hi {{ name }},</h1>
        <p id='IDField'>Employee ID: </p>
        <p id='bioField'>About Me: </p>
        <p id='passwordField'>Password: </p>
    </div>
</template>

<script>
export default {
  name: 'MyProfile',
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

