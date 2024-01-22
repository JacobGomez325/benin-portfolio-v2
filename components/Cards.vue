<template>
  <div class="bg-[#1e293b] p-4 rounded-md shadow">
    <h2 class="text-2xl font-bold text-white py-2">{{ props.name }}</h2>
    <p class="flex space-x-2 py-2">
      <IconsLink color="text-primary" height="1.6em" width="1.6em" />
      <a :href="props.link" target="_blank" class="text-white font-semibold">{{ props.linkSlug }} </a>
    </p>
    <p v-if="props.socials" class="flex space-x-2 items-center ">
      <a v-if="props.socials?.twitter" :href="`https://twitter.com/${props.socials?.twitter}`" target="_blank" >
        <IconsSocialsTwitter color="text-[#1d9bf0]" height="1.8em" width="1.8em" />
      </a>
      <a v-if="props.socials?.github" :href="`https://github.com/${props.socials?.github}`" class="text-white" target="_blank">
        <IconsSocialsGithub  height="1.8em" width="1.8em" />
      </a>
      <a v-if="props.socials?.linkedin" :href="`https://www.linkedin.com/${props.socials?.linkedin}`" target="_blank">
        <IconsSocialsLinkedin color="text-[#0a66c2]" height="1.8em" width="1.8em" />
      </a>
    </p>
    <div class="flex flex-wrap">
      <div v-for="(tag, i) in tags" :key="i"
        class="flex xl:space-x-3 space-x-2 items-center border border-primary text-white m-2 px-3 py-1 cursor-pointer  rounded-2xl transition-all duration-200 ">
        <span class="block bg-white w-2 h-2 rounded-full "></span>
        <span class=" font-semibold  "> {{ tag }} </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {Card} from '@/types/card.type'
const props = defineProps<Card>()
</script>

<style scoped></style>~/types/card.type