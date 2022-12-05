<template>
    <div class="forum">
        <h1>{{ msg }}</h1>
        
    </div>
</template>

<script>
export default {
  name: 'ForumPosts',
  props: {
    msg: String
  }
}
</script>
