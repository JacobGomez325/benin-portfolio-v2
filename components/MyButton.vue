<template>
  <button :class="`${props.textColor} ${props.bgColor} ${props.bordere} ${props.animation} ${props.otherStyle} ${props.display} `">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

const props = defineProps({
  textColor:{
    type:String,
    required:true
  },
  bgColor : {
    type:String,
    required:false,
    default:'bg-transparent'
  },
  bordere :{
    type:String,
    required:true
  },
  animation : {
    type:String,
    required:true
  },
  otherStyle : {
    type:String,
    required:true
  },
  display: {
    type:String,
    required:false
  }
})

</script>

<style scoped>

</style>