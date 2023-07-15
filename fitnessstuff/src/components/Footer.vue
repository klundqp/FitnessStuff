<script setup lang="ts">

</script>
<template>
    <div id="container">
        <div id="cookies">
            <div id="cookies--cookies">
            <p>Ændre cookiesamtykke</p>
            <p>Cookie-og privatlivspolitik</p>
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
  background-color:#292354;
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
  text-align:right;
}
</style>