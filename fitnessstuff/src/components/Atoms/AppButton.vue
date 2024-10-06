<script setup lang="ts">

interface InputProps {
    type: string;
    variant: string;
    text?: string;
    disabled: boolean;
}

const props = withDefaults(defineProps<InputProps>(), {
    type: "button",
    variant: "primary",
    text: "",
    disabled: false,
})

</script>

<template>
    <button :type='type' :class='`btn btn-${variant}`' :disabled='disabled' @click="$emit('click')">{{ text }}</button>
</template>