<template>

    <div class="exercise-page">
      <h1>Description of excersize {{ excerciseId }}</h1>
      <router-link to="/">To main page</router-link>
    </div>
  </template>

<script>
export default {
  name: 'ExercisePage',
  data () {
    return {
      excerciseId: this.$route.params.id
    }
  }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
