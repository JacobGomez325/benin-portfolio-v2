<template>
  <div class="flex flex-wrap ">
    <div v-for="(i, index) in props.items" :key="index" :class="{
      'bg-primary': tag.isActive === true,
      'border border-primary hover:bg-primary text-white  hover:text-black': tag.isActive === false,
    }"
      class="flex xl:space-x-3 space-x-2 items-center m-2 px-3 py-1 cursor-pointer rounded-2xl transition-all duration-200"
      @click="toogleTags(tag)">
      <span v-if="!tag.isActive" class="font-semibold">#</span>
      <span v-else class="block bg-black w-2 h-2 rounded-full"></span>
      <span class="font-semibold"> {{ i.name }} </span>
    </div>

  </div>
</template>

<script setup lang="ts">
import type {Categories} from '@/types/tags.type'

const props = defineProps<{
  items:Categories[]
}>()

const tag = reactive({
  isActive: false
})

function toogleTags(data: any) {
  console.log(data)
}

</script>


<style></style>~/types/card.type