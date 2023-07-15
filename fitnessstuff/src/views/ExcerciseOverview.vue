<script setup lang="ts">
import { useExcerciseOverviewStore } from '../stores/excerciseOverviewStore';

const store = useExcerciseOverviewStore();
</script>

<template>
    <div class="hello">
    <h1>ExcerciseOverview</h1>
    <div class="input-div">
      <input type="text" v-model="store.text" placeholder="Excercise">
      <router-link :to="'/exercise/' + store.text">To excercise</router-link>
    </div>
  </div>
</template>