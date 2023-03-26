<template>
     <button :style="{ background: color }" class="btn">
          {{ text }}
     </button>
</template>

<script>
export default {
     // eslint-disable-next-line vue/multi-word-component-names
     name: "Button",
     props: {
          text: String,
          color: String,
     },
};
</script>
