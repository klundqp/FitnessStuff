<script setup lang="ts">
defineProps<{ id: string }>();
</script>
<template>
    <div class="collapse navbar-collapse" :id="id">
        <div class="navbar-nav">
            <slot></slot>
        </div>
    </div>
</template>