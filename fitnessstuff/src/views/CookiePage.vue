<script setup lang="ts">
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

</script>

<template>
    <div class="cookie-page">
        <h1>Cookie- og privatlivspolitik</h1>
        <div class="cookie-container">
            <LiteYouTubeEmbed
                id="42pYj-ZWITk"
                ref="iframe"
                title="PUT THAT COOKIE DOWN"
                />
        </div>
    </div>
</template>

<style lang="scss">
.cookie-page{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cookie-container {
    width: 35%;
}
</style>
