<script setup lang="ts">
import Footer from "./components/Footer.vue"
import NavigationBar from "./components/Bootstrap/Navigation/NavigationBar.vue"
</script>

<template>
  <div id="app">
    <NavigationBar></NavigationBar>
    <router-view> </router-view>
    <Footer></Footer>
  </div>
</template>

<style scoped>
</style>
