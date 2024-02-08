<template>
  <div class="bg-[#1e293b] pl-6 pr-4 pt-4 pb-2 rounded-md shadow">
    <div class="flex justify-between">
      <h2 class="text-2xl font-bold text-white py-2">{{ props.name }}</h2>
      <p v-if="props.socials" class="flex space-x-2 items-center my-2">
        <a v-if="props.socials?.twitter" :href="`https://twitter.com/${props.socials?.twitter}`" target="_blank" >
          <IconsSocialsTwitter color="text-gray-300" height="1.2em" width="1.2em" />
        </a>
        <a v-if="props.socials?.github" :href="`https://github.com/${props.socials?.github}`" class="text-white" target="_blank">
          <IconsSocialsGithub  height="1.2em" width="1.2em" />
        </a>
        <a v-if="props.socials?.linkedin" :href="`https://www.linkedin.com/${props.socials?.linkedin}`" target="_blank">
          <IconsSocialsLinkedin color="text-[#0a66c2]" height="1.2em" width="1.2em" />
        </a>
      </p>
    </div>
    
    <p class="flex space-x-2 py-2">
      <IconsLink color="text-primary" height="1.6em" width="1.6em" />
      <a :href="props.link" target="_blank" class="text-white font-semibold">{{ props.linkSlug }} </a>
    </p>
    <div class="flex flex-wrap space-x-1">
      <div v-for="(tag, i) in props.tags" :key="i"
        class="flex lg:space-x-2 space-x-1 items-center border border-primary text-white my-2 px-3 py-1 cursor-pointer  rounded-2xl transition-all duration-200 ">
        <span class="block bg-white w-2 h-2 rounded-full "></span>
        <span class=" font-semibold text-sm  "> {{ tag }}  </span>
      </div>
    </div>
       
    <div class=" pt-4 pb-2 ">
      <span  
      v-for="(technology,index) in props.technology"
      :key="index"
      class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{ technology }}</span>
    </div>
    
      
  </div>
</template>

<script setup lang="ts">
import type {Card} from '@/types/card.type'
const props = defineProps<Card>()
</script>

<style scoped></style>