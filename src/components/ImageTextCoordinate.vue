<template>
  <div class="text-on-image-container">
    <img :src="imageSrc" alt="dynamic image" />
    <div
        class="text-overlay"
        :style="textStyle"
        v-text="text"
    >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties } from 'vue';

export default defineComponent({
  name: 'ImageTextCoordinates',
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image_x_coordinate: {
      type: String,
      default: 50,
    },
    image_y_coordinate: {
      type: String,
      default: 50,
    },
    textAlign: {
      type: String,
      default: 'center',
    },
    textBackgroundWidth: {
      type: Number,
    },
    textFontColor: {
      type: String,
      default: 'white', // Default font color
    },
    textSize: {
      type: String,
      default: 10, // Default font size
    },
    backgroundColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.5)', // Default background color
    },
  },
  setup(props) {
    const constrainedXImageCoordinate = computed(() => {
      return Math.min(100, Math.max(0, props.image_x_coordinate));
    });

    const constrainedYImageCoordinate = computed(() => {
      return Math.min(100, Math.max(0, props.image_y_coordinate));
    });

    const textStyle = computed<CSSProperties>(() => {
      return {
        left: `${constrainedXImageCoordinate.value}%`,
        top: `${constrainedYImageCoordinate.value}%`,
        transform: 'translate(-50%, -50%)', // Centers the text at the given coordinates
        textAlign: props.textAlign as CSSProperties['textAlign'], // Explicitly cast textAlign
        width: `${props.textBackgroundWidth}%`, // Fit against the image width
        color: props.textFontColor,
        backgroundColor: props.backgroundColor, // Dynamic background color
        fontSize: props.textSize,
        padding: '4px 15px 4px 15px',
      };
    });

    return {
      constrainedXImageCoordinate,
      constrainedYImageCoordinate,
      textStyle,
    };
  },
});
</script>

<style scoped>
.text-on-image-container {
  position: relative;
  display: inline-block;
}
.image {
  display: block;
  width: 100%;
  height: auto;
}
.text-overlay {
  position: absolute;
  pointer-events: none;
  white-space: wrap;
}
</style>
