<script setup lang="ts">
interface InputProps {
    variant: string;
    to: string;
    text: string;
}

const props = withDefaults(defineProps<InputProps>(), {
    variant: "secondary",
    to: "",
    text: ""
})
</script>

<template>
    <button :class='`btn mt-2 mb-2 btn-${variant}`'>
        <router-link class="cookie-link" :to="to">{{text}}</router-link>
    </button>
</template>