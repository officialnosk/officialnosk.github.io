<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :viewBox="viewBox"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      :cx="circle.cx"
      :cy="circle.cy"
      :fill="circle.fill"
      :r="circle.r"
    ></circle>
    <path :d="path" :fill="fill" />
  </svg>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: '20px',
    },
    path: {
      type: [String, Array],
      required: true,
    },
    viewBox: {
      type: String,
      default: '0 0 24 24',
    },
    fill: {
      type: String,
      default: 'currentColor',
    },
    circle: {
      type: Object,
      default() {
        return {
          cx: '14',
          cy: '14',
          fill: 'currentColor',
          r: '0',
        }
      },
    },
  },
}
</script>
