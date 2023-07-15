<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useExcercisePageStore } from '../stores/exercisePageStore';
import { onMounted } from 'vue';

const store = useExcercisePageStore();
const route = useRoute();

onMounted(() => {
    store.excerciseId = route.params.id as string;
});



</script>

<template>
    <div class="exercise-page">
      <h1>Description of excersize {{ store.excerciseId }}</h1>
      <router-link to="/">To main page</router-link>
    </div>
</template>
