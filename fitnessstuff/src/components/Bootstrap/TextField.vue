<script setup lang="ts">
interface Props {
  label?: string;
  name: string;
  type?: "email" | "text" | "password" | "date";
  placeholder?: string;
  value?: any;
}

defineProps<Props>();
defineEmits<{
  (e: "update:value", value: any): void;
}>();
</script>

<template>
  <div>

    <label v-if="label" :for="name" class="form-label">{{ label }}</label>
    <input
      :value="value"
      @input="$emit('update:value', type == 'date' ? ($event.target as any).valueAsDate : ($event.target as any).value)"
      :type="type || 'text'"
      class="form-control"
      :id="name"
      :placeholder="placeholder"
    />
  </div>
</template>
