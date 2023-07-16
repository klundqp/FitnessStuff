<script setup lang="ts">
import AudioButton from "@/components/AudioButton.vue"
</script>

<template>
    <div id="container">
        <div id="cookies">
            <div id="cookies--cookies">
            <audio-button class="mt-2" text="Ændre cookiesamtykke"></audio-button>
            <button class="btn btn-secondary mt-2 mb-2">
              <router-link class="cookie-link"  to="/cookie-og-privatlivspolitik/">Cookie-og privatlivspolitik</router-link>
            </button>
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
  background-color:#f4f6f5;
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

.cookie-link{
  color: #fff;
  text-decoration: none;
}
</style>