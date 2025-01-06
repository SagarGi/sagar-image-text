<template>
  <div class="image-container" :style="imageContainerStyle">
    <img :src="imageSrc" alt="Image" class="background-image" :style="{ borderRadius: imageBorderRadius }" />
    <p :style="textStyle">{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties, PropType } from 'vue';

export default defineComponent({
  name: "ImageText",
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
    text: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      default: 'white',
    },
    textFontStyle: {
      type: String,
      default: 'normal',
    },
    textFontFamily: {
      type: String,
      default: 'Arial, Helvetica, sans-serif;',
    },
    textSize: {
      type: String,
      default: '10px',
    },
    textPosition: {
      type: String as PropType<
        'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center' | 'center'
      >,
      default: 'center',
      required: true,
    },
    textBackgroundColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.5)', // Default background color
    },
  },
  setup(props) {
    const textStyle = computed<CSSProperties>(() => {
      const positionMap: Record<string, Record<string, string>> = {
        'top-left': { top: '0px', left: '10px' },
        'top-right': { top: '0px', right: '10px' },
        'top-center': { top: '0px', left: '50%', transform: 'translateX(-50%)' },
        'bottom-left': { bottom: '0px', left: '10px' },
        'bottom-right': { bottom: '0px', right: '10px' },
        'bottom-center': { bottom: '0px', left: '50%', transform: 'translateX(-50%)' },
        'center': { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
      };

      const positionStyle = positionMap[props.textPosition] || positionMap['top-left'];

      return {
        position: 'absolute',
        ...positionStyle,
        color: props.textColor,
        fontSize: props.textSize,
        backgroundColor: props.textBackgroundColor,
        fontStyle: props.textFontStyle,
        fontFamily: props.textFontFamily,
        maxWidth: "96%",
        padding: "2%",
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
      } as CSSProperties; // Explicit cast here
    });
    const imageContainerStyle = computed<CSSProperties>(() => {
      return {
        position: 'relative',
        width: props.imageWidth,
        height: props.imageHeight
      } as CSSProperties;

    })
    return { textStyle, imageContainerStyle };
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