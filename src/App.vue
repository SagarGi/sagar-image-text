<script setup lang="ts">
import { ImageText, ImageTextCoordinate } from "sagar-image-text";
import "sagar-image-text/style.css";
import {VCodeBlock} from "@wdns/vue-code-block";
import { ref } from "vue";

const codeSnippetImageText = ref([
    '<ImageText\n' +
    '   image-src="ImageSrcPath"\n' +
    '   text="Village View"\n' +
    '   text-position="center"\n' +
    '   image-border-radius="10px"\n' +
    '/>',
    '<ImageText\n' +
    '   image-src="ImageSrcPath"\n' +
    '   text="Mountain View"\n' +
    '   text-position="top-right"\n' +
    '   image-border-radius="10px"\n' +
    '/>',
    '<ImageText\n' +
    '   image-src="ImageSrcPath"\n' +
    '   text="Pashupatinath Temple"\n' +
    '   text-position="bottom-center"\n' +
    '   image-border-radius="10px"\n' +
    '/>',
])

const codeSnippetImageTextCoordinate = ref([
    '<ImageTextCoordinate\n' +
    '   image-src="ImageSrcPath"\n' +
    '   text="Fishtail (6999m)"\n' +
    '   image_x_coordinate="50"\n' +
    '   image_y_coordinate="75"\n' +
    '   image-border-radius="10px"\n' +
    ' />',
    '<ImageTextCoordinate\n' +
    '   image-src="ImageSrcPath"\n' +
    '   text="Heaven on Earth is Nepal"\n' +
    '   image_x_coordinate="50"\n' +
    '   image-border-radius="10px"\n' +
    ' />'
])

</script>

<template>
  <div id="app">
    <div class="centered-container">
      <div class="main-wrapper">
        <div class="introduction-section">
          <h1>Sagar Image Text - {...} Examples</h1>
          <VCodeBlock
              class="npm-install-snippet"
              code="npm i sagar-image-text"
              highlightjs="false"
              theme="idea"
          />
          <p>
            <span><b>"sagar-text-image"</b></span> is a simple Vue library that enables you to place text anywhere on an image, making it easy to style text on images.
          </p>
        </div>

        <div class="image-text-wrapper">
          <div class="heading">
            <h3>1. Examples: <span class="component">{ ImageText }</span></h3>
          </div>
          <div class="image-text-wrapper--imagetext-components">
            <div class="image-text-component">
              <ImageText
                  image-src="sample4.jpg"
                  text="Village View"
                  text-position="center"
                  text-size="15px"
                  image-border-radius="10px"
                  image-height="200px"
              />
              <VCodeBlock
                  class="code-snippet-block"
                  :code="codeSnippetImageText[0]"
                  highlightjs="false"
                  lang="html"
                  codeBlockRadius="5px"
                  theme="idea"
              />
            </div>
            <div class="image-text-component">
              <ImageText
                  image-src="sample5.jpg"
                  text="Mountain View"
                  text-position="top-right"
                  text-size="16px"
                  image-border-radius="10px"
                  image-height="200px"
              />
              <VCodeBlock
                  class="code-snippet-block"
                  :code="codeSnippetImageText[1]"
                  highlightjs="false"
                  lang="html"
                  codeBlockRadius="5px"
                  theme="idea"
              />
            </div>
            <div class="image-text-component">
              <ImageText
                  image-src="sample3.jpg"
                  text="Pashupatinath Temple"
                  text-position="bottom-center"
                  text-size="14px"
                  image-border-radius="10px"
                  image-height="200px"
              />
              <VCodeBlock
                  class="code-snippet-block"
                  :code="codeSnippetImageText[2]"
                  highlightjs="false"
                  lang="html"
                  codeBlockRadius="5px"
                  theme="idea"
              />
            </div>
          </div>
        </div>

        <div class="image-text-wrapper-coordinates">
          <div class="heading">
            <h3>2. Examples: <span class="component">{ ImageTextCoordinate }</span></h3>
          </div>
          <div class="image-text-wrapper--imagetext-components">
            <div class="image-text-component">
              <ImageTextCoordinate
                  class="image-text-component"
                  image-src="sample6.jpg"
                  text="Fishtail (6999m)"
                  text-size="18px"
                  image_x_coordinate="50"
                  image_y_coordinate="75"
                  image-border-radius="10px"
              />
              <VCodeBlock
                  class="code-snippet-block"
                  :code="codeSnippetImageTextCoordinate[0]"
                  highlightjs="false"
                  lang="html"
                  codeBlockRadius="5px"
                  theme="idea"
              />
            </div>
            <div class="image-text-component">
              <ImageTextCoordinate
                  class="image-text-component"
                  image-src="sample7.jpeg"
                  text="Heaven on Earth is Nepal"
                  text-size="18px"
                  image_x_coordinate="50"
                  image-border-radius="10px"
              />
              <VCodeBlock
                  class="code-snippet-block"
                  :code="codeSnippetImageTextCoordinate[1]"
                  highlightjs="false"
                  lang="html"
                  codeBlockRadius="5px"
                  theme="idea"
              />
            </div>
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
  width: 50%;
  max-width: 1200px;
  padding: 20px;
  border: 2px solid #09502b;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  box-sizing: border-box;
  text-align: center;
}
.introduction-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

.code-snippet-block {
  margin-top: 10px;
  text-align: left;
}

.npm-install-snippet {
  margin-top: 20px;
  text-align: center;
  width: 40%;
}

h3 {
  font-family: "Roboto", sans-serif;
  color: #5d5d5d;
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
    width: 90%;
  }

  .introduction-section p {
    width: 90%;
  }
  .centered-container {
    width: 90%;
  }
}

@media (max-width: 480px) {
  .image-text-component {
    flex: 1 1 100%;
    width: 90%;
  }

  .centered-container {
    width: 90%;
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


