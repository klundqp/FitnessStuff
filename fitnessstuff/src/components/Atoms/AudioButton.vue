<script lang='ts'>
import { defineComponent, ref } from "vue";
import AppButton from "./AppButton.vue"

export default defineComponent({
    name: "CommunicateVoice",
    components: { AppButton },
    props: {
        text: String
    },
    setup() {
        const audio = ref<HTMLAudioElement>();
        return {
            audio,
        };
    },
    methods: {
        toggleAudio() {
            console.log("Orig Audio: ", this.audio)
            if (this.audio !== undefined) {
                this.audio.play();
            }
        }
    }
});
</script>

<template>
    <div>
        <AppButton @click="toggleAudio" text="Change cookie consent"></AppButton>
        <audio hidden="true" ref="audio">
            <source src="@/assets/audio/put-that-cookie-down.mp3" type="audio/mpeg">
        </audio>
    </div>
</template>

<style lang="scss"></style>