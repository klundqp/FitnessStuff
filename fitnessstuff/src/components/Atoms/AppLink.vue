<script setup lang="ts">
interface InputProps {
    variant: string;
    routeName: string;
    id?: string;
    text: string;
}

const props = withDefaults(defineProps<InputProps>(), {
    variant: "secondary",
    routeName: "",
    text: ""
})
</script>

<template>
    <button :class='`btn mt-2 mb-2 btn-${variant}`'>
        <router-link class="cookie-link" :to="{
            name: routeName,
            params: {
                id: id
            },
        }">{{ text }}</router-link>
    </button>
</template>