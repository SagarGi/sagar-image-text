<template>
  <div class="image-container" :style="{ position: 'relative', width: imageWidth, height: imageHeight }">
    <img :src="imageSrc" alt="Image" class="background-image" />
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
    text: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      default: 'white',
    },
    textSize: {
      type: String,
      default: '10px',
    },
    position: {
      type: String as PropType<
        'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center' | 'center'
      >,
      default: 'center',
    },
    imageWidth: {
      type: [String, Number] as PropType<string | number>,
      default: '100%',
    },
    imageHeight: {
      type: [String, Number] as PropType<string | number>,
      default: 'auto',
    },
    backgroundColor: {
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

      const positionStyle = positionMap[props.position] || positionMap['top-left'];

      return {
        position: 'absolute',
        ...positionStyle,
        color: props.textColor,
        fontSize: props.textSize,
        backgroundColor: props.backgroundColor,
        padding: '4px 15px 4px 15px',
      } as CSSProperties; // Explicit cast here
    });

    return { textStyle };
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