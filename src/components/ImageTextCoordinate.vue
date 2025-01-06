<template>
  <div class="image-container" :style="imageStyle">
    <div class="image-container" :style="imageStyle">
      <img :src="imageSrc" alt="Image" class="background-image" :style="{ borderRadius: imageBorderRadius }" />
      <p :style="textStyle">{{ text }}</p>
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
    imageWidth: {
      type: String,
      default: '100%',
    },
    imageHeight: {
      type: String,
      default: 'auto',
    },
    imageBorderRadius: {
      type: String,
      default: '0', // Default to no border radius
    },
    textFontStyle: {
      type: String,
      default: 'normal',
    },
    textFontFamily: {
      type: String,
      default: 'Arial, Helvetica, sans-serif;',
    },
    text: {
      type: String,
      required: true,
    },
    image_x_coordinate: {
      type: Number,
      default: 50,
    },
    image_y_coordinate: {
      type: Number,
      default: 50,
    },
    textAlign: {
      type: String,
      default: 'center',
    },
    textBackgroundWidth: {
      type: Number,
      default: "100"
    },
    textColor: {
      type: String,
      default: 'white', // Default font color
    },
    textSize: {
      type: String,
      default: 10, // Default font size
    },
    textBackgroundColor: {
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
        position: 'absolute',
        left: `${constrainedXImageCoordinate.value}%`,
        top: `${constrainedYImageCoordinate.value}%`,
        transform: 'translate(-50%, -50%)',
        textAlign: props.textAlign as CSSProperties['textAlign'],
        maxWidth: "100%", // Ensures the text won't exceed 90% of the image width
        width: `${props.textBackgroundWidth}%`,
        color: props.textColor,
        backgroundColor: props.textBackgroundColor,
        fontSize: `${props.textSize}px`,
        paddingTop: "5px",
        paddingBottom: "5px",
        fontStyle: props.textFontStyle,
        fontFamily: props.textFontFamily,
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
      };
    });

    const imageStyle = computed<CSSProperties>(() => {
      return {
        position: 'relative',
        width: props.imageWidth,
        height: props.imageHeight
      } as CSSProperties;

    })

    return {
      constrainedXImageCoordinate,
      constrainedYImageCoordinate,
      textStyle,
      imageStyle
    };
  },
});
</script>

<style scoped>
.image-container {
  width: 100%;
  height: 100%;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
