<script setup lang="ts">
import AppLink from "@/components/Atoms/AppLink.vue"
import AudioButton from "@/components/Atoms/AudioButton.vue"

</script>

<template>
  <div id="container">
    <div id="cookies">
      <div id="cookies--cookies">
        <AudioButton text="Change cookie consent"></AudioButton>
        <AppLink route-name="CookiePage" text="Cookie and privacy policy"></AppLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

#container {
  margin-top: 20px;
  width: 100vw;
  color: white;
  background-color: #f4f6f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
}

#cookies {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

#cookies--cookies {
  text-align: center;
}

.cookie-link {
  color: #fff;
  text-decoration: none;
}
</style>