<template>
  <div id="account">
    <h2>{{ msg }}</h2>
        <form>
            <label>Email <input type="email"></label>
            <label>Password <input type="password" placeholder="keep this a secret"></label>
            <button type="submit">Sign In</button>
            <button type="submit">Sign Up</button>
        </form>
  </div>
</template>

<script>
export default {
  name: 'SignUpOrIn',
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

button {
    margin: 10px;
    padding: 5px 10px;
    color: #fd2d01;
    border-color: #fd2d01;
    border-radius: 20px;
    border-width: 3px;
}
</style>