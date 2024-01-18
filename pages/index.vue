<template>
  <TheHeader />
  <main class="bg-color-main">
    <div class="container mx-auto py-8 grid lg:grid-cols-main-grid lg:gap-6 sm:grid-cols-1 sm:gap-4">
      <div class="">
        <h1 class="text-2xl font-bold text-white py-3">Filter by</h1>
        <FilterTags 
        :items = tags.categories
        />
        <div class="grid grid-cols-3 gap-4 mt-6">
          <div v-for="(techno,index) in technologies" :key="index" class="flex items-center ">
            <input v-model="datas" :id="`${index} ${techno.name}`" type="checkbox" :value="techno.name" class="w-4 h-4  bg-gray-100 border-gray-300 rounded">
            <label for="default-checkbox" class="ms-2 text-sm font-medium text-white"> {{ techno.name }} </label>
          </div>
        </div>
      </div>
     
      <div class="grid grid-cols-2 gap-4 "> 
        <Cards
          v-for="(item,index) in 30 " 
          :key="index"
          v-bind="cardProps"
        />
      </div>
      
    </div>
  </main>

  
  
</template>

<script setup lang="ts">
import tags from '@/data/tags.json'
import  {type Card} from '@/app/types/card.type'

const cardProps = reactive<Card>({
  name: "Gomez jacob",
    link: "https://www.linkedin.com/in/jacob-ambroise-david-gomez-989b151b9/",
    linkSlug:"jacobgomez.dev",
    tags: ["frontend", "backend", "design"],
    description:"FullStack js web developer, working with #vue, #nuxt #js #ts #adonis",
    socials: {
      twitter: "gojanda325",
      github: "jacobGomez325",
      linkedin: "jacob-ambroise-david-gomez-989b151b9",
    },

})

const datas = ref([])

const  technologies = [
    {
        "name": "React.js"
    },
    {
        "name": "Angular"
    },
    {
        "name": "Vue.js"
    },
    {
        "name": "CSS"
    },
    {
        "name": "SASS/LESS"
    },
    {
        "name": "Tailwind CSS"
    },
    {
        "name": "HTML"
    },
    {
        "name": "JSX"
    }
]

const cards = {
    name: "Gomez jacob",
    link: "https://www.linkedin.com/in/jacob-ambroise-david-gomez-989b151b9/",
    link_slug:"jacobgomez.dev",
    tags: ["frontend", "backend", "design"],
    description:"FullStack js web developer, working with #vue, #nuxt #js #ts #adonis",
    socials: {
      twitter: "gojanda325",
      github: "jacobGomez325",
      linkedin: "jacob-ambroise-david-gomez-989b151b9",
    },
  }

console.log(tags)

</script>

<style scoped>

</style>


