<script setup lang="ts">

defineProps<{
    width?: number
}>()
</script>
    
<template>
    <div :class="`col${width ? `-${width}` : ''}`">
        <slot></slot>
    </div>
</template>
    
<style scoped>

</style>
    