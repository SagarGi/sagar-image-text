<script setup lang="ts">
import { ImageText } from "sagar-image-text";
import ImageTextCoordinates from "./components/ImageTextCoordinate.vue";
</script>

<template>
  <div id="app">
    <div class="main-wrapper">
      <!-- Introduction Section -->
      <div class="introduction-section">
        <h1>Text Image: Usage and Demo</h1>
        <div class="npm-install-div">
          <i class="npm-icon">&gt;</i> npm i sagar-text-image
        </div>
        <p>
          <span><b>"sagar-text-image"</b></span> is a simple Vue library that enables you to place text anywhere on an image, a task that can often be quite boring and making text on image easy.
        </p>
      </div>

      <!-- Image Text Wrapper -->
      <div class="image-text-wrapper">
        <div class="heading">
          <h3>1. Examples using Component <span class="component">ImageText</span></h3>
        </div>
        <div class="image-text-wrapper--imagetext-components">
          <ImageText
              class="image-text-component"
              image-src="sample.jpeg"
              text="Mt everest (8848m)"
              text-position="bottom-left"
              text-size="18px"
          />
          <ImageText
              class="image-text-component"
              image-src="sample.jpeg"
              text="Beautiful sunrise"
              text-position="top-right"
              text-size="18px"
          />
          <ImageText
              class="image-text-component"
              image-src="sample.jpeg"
              text="Enjoy Mountain"
              text-position="bottom-center"
              text-size="14px"
          />
        </div>
      </div>
      <div class="image-text-wrapper-coordinates">
        <div class="heading">
          <h3>2. Examples using Component <span class="component">ImageTextCoordinates</span></h3>
        </div>
        <div class="image-text-wrapper--imagetext-components">
          <ImageTextCoordinates
              class="image-text-component"
              image-src="sample.jpeg"
              text="Mt Everest (8848m)"
              text-size="18px"
              image_x_coordinate="50"
              image_y_coordinate="79"
              text-background-width="90"
          />
          <ImageTextCoordinates
              class="image-text-component"
              image-src="sample.jpeg"
              text="Mountain & Sunrise"
              text-size="18px"
              image_x_coordinate="50"
              text-background-width="90"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Importing Roboto font via CSS */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

/* Body and html to ensure full viewport height */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden; /* Prevent scrolling */
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
}

/* Main wrapper styling */
.main-wrapper {
  width: 60%; /* Make it responsive */
  height: 100%; /* Let it adapt to content size */
  padding: 20px; /* Add padding for spacing */
  border-top: 50px solid #2bbe72;
  border-bottom: 10px solid #2bbe72;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the wrapper */
}

/* Styling for the introduction section */
.introduction-section {
  text-align: center;
  margin: 30px 0;
}

.introduction-section h1 {
  font-family: "Roboto", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #4b4b4b;
}

.introduction-section p {
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  color: #414141;
  max-width: 100%; /* Ensure content stays within wrapper */
  margin: 40px auto 0 auto;
  line-height: 1.6;
  padding-left: 250px;
  padding-right: 250px;
}

/* NPM install button styling */
.npm-install-div {
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #2bbe72;
  color: white;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  font-size: 14px;
}

.npm-icon {
  margin-right: 8px;
  font-weight: bold;
}

/* Image text wrapper */
.image-text-wrapper, .image-text-wrapper-coordinates {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center;
  gap: 20px;
}

.image-text-wrapper-coordinates {
  margin-top: 25px;
}

h3 {
  font-family: "Roboto", sans-serif;
  color: #4b4b4b;
}

.component {
  color: #2bbe72;
}

.image-text-wrapper--imagetext-components {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping to prevent overflow */
  gap: 20px; /* Space between components */
  justify-content: center; /* Center components */
}

.image-text-component {
  flex: 1 1 calc(30% - 20px); /* Make components responsive */
  max-width: 400px; /* Limit maximum size */
  min-width: 300px; /* Prevent shrinking too much */
  height: auto;
  box-sizing: border-box;
}

/* Ensure responsiveness for smaller screens */
@media (max-width: 768px) {
  .main-wrapper {
    width: 95%;
  }

  .image-text-wrapper--imagetext-components {
    flex-direction: column; /* Stack components */
    align-items: center;
  }

  .image-text-component {
    flex: 1 1 100%;
  }
}
</style>
