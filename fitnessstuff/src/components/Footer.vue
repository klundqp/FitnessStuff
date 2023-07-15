<script setup lang="ts">
import AudioButton from "@/components/AudioButton.vue"
</script>

<template>
    <div id="container">
        <div id="cookies">
            <div id="cookies--cookies">
            <audio-button text="Ændre cookiesamtykke"></audio-button>
            <router-link to="/cookie-og-privatlivspolitik/">Cookie-og privatlivspolitik</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

#container{
  margin-top:20px;
  width:100vw;
  color:white;
  background-color:#707072;
  display:flex;
  flex-direction:column;
  align-items:center;
  position: fixed;
  bottom: 0;
}
#cookies{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
}
#cookies--cookies{
  text-align: center;
}
</style>