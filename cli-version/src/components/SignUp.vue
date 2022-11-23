<template>
  <div id="account">
    <h2>{{ msg }}</h2>
        <form>
            <label>Employee ID <input type="number" min="100000" max="999999" required placeholder="this would be your 6 digit employee ID"></label>
            <label>Password <input type="password" required placeholder="set it and don't forget it"></label>
            <label>Name <input type="text" required placeholder="this will be your display name"></label>
            <label>Bio <input type="text" placeholder="this is optional but recommended"></label>
            <label> Image (optional)<input type="file"></label>
            <button type="submit">Sign Up</button>
        </form>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
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