<script lang="ts" setup>

defineEmits<{
    (e: 'click', event: MouseEvent): void
}>()

</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-filter-left"
    viewBox="0 0 16 16"
    @click="$emit('click')"
  >
    <path @click="$emit('click')"
      d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
    />
  </svg>
</template>
