<template>
  <input type="text" 
  :placeholder="props.placeholdere" 
  :class="props.styles"
  v-model="search"
  >
</template>

<script setup lang="ts">
const search = defineModel()
const props = defineProps({
  styles : {
    type:String,
    required:true
  },
  placeholdere : {
    type:String,
    required:true
  }
})
</script>

<style scoped>

</style>