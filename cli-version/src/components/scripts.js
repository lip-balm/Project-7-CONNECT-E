//this works for all posts

{/* <div class="postCard">
<p class="postAuthor" v-for="post in posts" :key="post.postID"> {{ post.name }} ({{ post.employeeID }}) said </p>
<p class="postDate" v-for="post in posts" :key="post.postID"> {{ post.date }} </p>
  <section class="postContent">
    <p class="postTitle" v-for="post in posts" :key="post.postID"> {{ post.title }} </p>
    <p class="postDescription" v-for="post in posts" :key="post.postID"> {{ post.description }} </p>
  </section>
  <section class="postComment">
    <input class="textbox" placeholder="start typing here...">
    <button @click="addComment">Comment</button>
  </section>
</div> */}


//this works for someposts
{/* <div class="postCard" v-if="display">
    <p class="postAuthor" v-for="post in posts" :key="post.postID"> {{ post.name }} ({{ post.employeeID }}) said </p>
    <p class="postDate" v-for="post in posts" :key="post.postID"> {{ post.date }} </p>
      <section class="postContent" v-if="display">
        <p class="postTitle" v-for="post in posts" :key="post.postID"> {{ post.title }} </p>
        <p class="postDescription" v-for="post in posts" :key="post.postID"> {{ post.description }} </p>
      </section>
      <section class="postComment" v-if="display">
        <input class="commentBox" placeholder="start typing here...">
        <button @click="addComment">Comment</button>
      </section>
  </div> */}