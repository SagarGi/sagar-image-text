<script setup lang="ts">
import { ImageText, ImageTextCoordinate } from "sagar-image-text";
</script>

<template>
  <div id="app">
    <div class="main-wrapper">
      <!-- Introduction Section -->
      <div class="introduction-section">
        <h1>Text Image: Usage and Demo</h1>
        <img src="/src/assets/big-sit.svg" alt="logo" />
        <p>
          <span><b>"sagar-text-image"</b></span> <i>is a simple Vue library that enables you to place text anywhere on an image, a task that can often be quite boring.</i>
        </p>
      </div>

      <!-- Image Text Wrapper -->
      <div class="image-text-wrapper">
        <ImageText
            image-src="sample.jpeg"
            text="Your text here"
            text-position="bottom-left"
            image-width="200px"

        />
        <ImageText
            image-src="sample.jpeg"
            text="Another text here"
            text-position="top-right"
        />
        <ImageText
            image-src="sample.jpeg"
            text="More text here"
            text-position="center"
        />
      </div>

      <!-- Image Text Coordinate Wrapper -->
      <div class="image-text-coordinate-wrapper">
        <ImageTextCoordinate
            image-src="sample.jpeg"
            text="Single Image with Text"
            image_x_coordinate=""
            image_y_coordinate=""
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Importing Roboto font via CSS */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

/* Main wrapper styling */
.main-wrapper {
  width: 50%;
  margin: 0 auto;
}

/* Styling for the introduction section */
.introduction-section {
  text-align: center;
  margin: 50px 0;
}

.introduction-section h1 {
  font-family: "Roboto", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #7b7b7b;
  margin-bottom: 20px;
}

.introduction-section p {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: black;
  max-width: 600px;
  margin: 10px auto;
  line-height: 1.6;
}

/* Styling for the image text wrapper */
.image-text-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 20px 0;
}

.image-text-wrapper ImageText {
  height: auto;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
}

/* Styling for the image text coordinate wrapper */
.image-text-coordinate-wrapper {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.image-text-coordinate-wrapper ImageText {
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
}
</style>
