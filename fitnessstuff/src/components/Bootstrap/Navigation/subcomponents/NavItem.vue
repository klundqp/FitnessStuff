<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';


defineProps<{
    to: RouteLocationRaw
}>()

</script>
<template>
    <router-link :class="`nav-link ${$route.path === to ? 'active' : ''}`" aria-current="page" :to="to">
        <slot></slot>
    </router-link>
</template>