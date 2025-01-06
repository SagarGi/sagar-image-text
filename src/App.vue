<script setup lang="ts">
import { ImageText, ImageTextCoordinate } from "sagar-image-text";
import "sagar-image-text/style.css";
</script>

<template>
  <div id="app">
    <div class="centered-container">
      <div class="main-wrapper">
        <div class="introduction-section">
          <h1>Text Image: Usage and Demo</h1>
          <div class="npm-install-div">
            <i class="npm-icon">&gt;</i> npm i sagar-text-image
          </div>
          <p>
            <span><b>"sagar-text-image"</b></span> is a simple Vue library that enables you to place text anywhere on an image, making it easy to style text on images.
          </p>
        </div>

        <div class="image-text-wrapper">
          <div class="heading">
            <h3>1. Examples: <span class="component">{ ImageText }</span></h3>
          </div>
          <div class="image-text-wrapper--imagetext-components">
            <ImageText
                class="image-text-component"
                image-src="sample4.jpg"
                text="Village View"
                text-position="center"
                text-size="18px"
                image-border-radius="10px"
                text-font-family="Arial, Helvetica, sans-serif"
            />
            <ImageText
                class="image-text-component"
                image-src="sample5.jpg"
                text="Mountain View"
                text-position="top-right"
                text-size="18px"
                image-border-radius="10px"
                text-font-family="Arial, Helvetica, sans-serif"

            />
            <ImageText
                class="image-text-component"
                image-src="sample3.jpg"
                text="Pashupatinath Temple"
                text-position="bottom-center"
                text-size="14px"
                image-border-radius="10px"
                text-font-family="Arial, Helvetica, sans-serif"
            />
          </div>
        </div>

        <div class="image-text-wrapper-coordinates">
          <div class="heading">
            <h3>2. Examples: <span class="component">{ ImageTextCoordinate }</span></h3>
          </div>
          <div class="image-text-wrapper--imagetext-components">
            <ImageTextCoordinate
                class="image-text-component"
                image-src="sample6.jpg"
                text="Fishtail (6999m)"
                text-size="18px"
                image_x_coordinate="50"
                image_y_coordinate="75"
                image-border-radius="10px"
                text-font-family="Arial, Helvetica, sans-serif"
            />
            <ImageTextCoordinate
                class="image-text-component"
                image-src="sample7.jpeg"
                text="Heaven on Earth is Nepal"
                text-size="18px"
                image_x_coordinate="50"
                image-border-radius="10px"
                text-font-family="Arial, Helvetica, sans-serif"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
}

.centered-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  padding: 20px;
  border: 2px solid #09502b;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  box-sizing: border-box;
  text-align: center;
}

.introduction-section h1 {
  font-family: "Roboto", sans-serif;
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  font-weight: 700;
  color: #000000;
  margin-bottom: 20px;
}

.introduction-section p {
  font-family: "Roboto", sans-serif;
  font-size: clamp(0.9rem, 3vw, 1rem);
  color: #ffffff;
  line-height: 1.6;
  margin: 20px auto;
  background: #09502b;
  width: 80%;
  max-width: 600px;
  padding: 15px;
  border-radius: 10px;
}

h3 {
  font-family: "Roboto", sans-serif;
  color: #5d5d5d;
}

.npm-install-div {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  background-color: #09502b;
  color: white;
  border-radius: 8px;
  font-size: clamp(0.8rem, 2vw, 1rem);
}

.image-text-wrapper--imagetext-components {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.component {
  color: #ff91ea;
}

.image-text-component {
  flex: 1 1 calc(33% - 20px);
  max-width: 400px;
  min-width: 280px;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .image-text-component {
    flex: 1 1 calc(50% - 20px);
    max-width: none;
  }

  .introduction-section p {
    width: 90%;
  }
}

@media (max-width: 480px) {
  .image-text-component {
    flex: 1 1 100%;
  }

  .npm-install-div {
    font-size: 0.8rem;
    padding: 6px 12px;
  }

  .introduction-section h1 {
    font-size: 1.5rem;
  }

  .introduction-section p {
    font-size: 0.8rem;
    padding: 10px;
  }
}
</style>


