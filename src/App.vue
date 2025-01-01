<script setup lang="ts">
import ImageText from './components/ImageText.vue'
import ImageTextCoordinate from "./components/ImageTextCoordinate.vue";
</script>
<template>
  <div id="app">
    <div class="wrapper">
      <ImageText
          imageSrc="sample.jpeg"
          text="Mt Everest (8848m)"
          text-position="bottom-left"
          text-size="14px"
      />
      <ImageTextCoordinate
          image-src="sample.jpeg"
          text="Mt Everest (8848m)"
          text-size="14px"
          image_x_coordinate="27"
          image_y_coordinate="75"
      />
    </div>
  </div>
</template>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
}
</style>
