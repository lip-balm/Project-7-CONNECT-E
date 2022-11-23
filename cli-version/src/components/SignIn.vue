<template>
  <div id="account">
    <h2>{{ msg }}</h2>
        <form>
            <label>Email <input type="email"></label>
            <label>Password <input type="password" placeholder="keep this a secret"></label>
            <button type="submit">Sign In</button>
        </form>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  props: {
    msg: String
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