<template>
  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
    stroke-linejoin="round" :class="props.color" :height="props.height" :width="props.width"
    xmlns="http://www.w3.org/2000/svg">
    <desc></desc>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z">
    </path>
  </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
  width: {
    type: String,
    default: '1em'
  },
  height: {
    type: String,
    default: '1em'
  },
  color: {
    type: String,
    default: 'currentColor'
  }
})
</script>

<style scoped></style>