<template>

  <div class="flex flex-wrap ">
    <div v-for="(item, index) in props.items" :key="index" :class="{
      'bg-primary': item.isActive === true,
      'border border-primary hover:bg-primary text-white  hover:text-black': item.isActive === false,
    }"
      class="flex xl:space-x-3 space-x-2 items-center m-2 px-3 py-1 cursor-pointer rounded-2xl transition-all duration-200"
      @click="toogleTags(item)">
      <span v-if="!item.isActive" class="font-semibold">#</span>
      <span v-else class="block bg-black w-2 h-2 rounded-full"></span>
      <span class="font-semibold"> {{ item.name }} ( {{ item.nbre }} ) </span>
    </div>

  </div>
</template>

<script setup lang="ts">
import type {Categories} from '@/types/tags.type'
const emits = defineEmits(['send'])
const props = defineProps<{
  items:Categories[]
}>()

function toogleTags(item: Categories) {
  props.items.forEach((element:Categories) => {
    if(element.isActive === true) {
      element.isActive = false
      item.isActive = true
    }
  })
  
  emits('send',item.technologies)
}

</script>


<style></style>