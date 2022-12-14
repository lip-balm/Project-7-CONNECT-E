<template>
    <div>
    <h2>{{ msg }}</h2>
    </div>
</template>

<script>
export default {
  name: 'someonesProfile',
  props: {
    msg: String
  },

  data() {
  },

  methods: {
    },


}
</script>

// create table comments (employeeID INTEGER(6), name VARCHAR(255), postID INTEGER, commentID INTEGER AUTO_INCREMENT, comment TEXT, date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, PRIMARY KEY (commentID));