<template>
  <div class="hello">
    <h1>ExcerciseOverview</h1>
    <div class="input-div">
      <input type="text" v-model="text" placeholder="Excercise">
      <router-link :to="'/excercise/' + text">To excercise</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExcerciseOverview',
  data () {
    return {
      text: ''
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
.input-divg{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
