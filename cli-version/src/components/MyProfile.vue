<template>
    <div class="profile">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
  name: 'MyProfile',
  props: {
    msg: String
  }
}
</script>

