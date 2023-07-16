<script lang='ts'>
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "CommunicateVoice",
    props: {
        text: String
    },
    data() {
        return {
            playing: false
        }
    },
    setup() {
        const audio = ref<HTMLAudioElement>();
        return {
            audio,
        };
    },
    methods: {
        toggleAudio() {
            this.playing = !this.playing
            if (this.audio !== undefined) {
                if (this.playing) {
                    this.audio.play()
                } else {
                    this.audio.pause()
                }
            }
        }
    }
});
</script>

<template>
    <div>
        <button class="btn btn-primary" v-on:click="toggleAudio">{{ text }}</button>
        <audio
            hidden="true"
            ref="audio"
        >
        <source src="@/assets/audio/put-that-cookie-down.mp3" type="audio/mpeg">
        </audio>
    </div>
</template>

<style lang="scss"></style>