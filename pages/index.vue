<template>
  <TheHeader />
  <main class="bg-color-main">
    <div class="container mx-auto py-8 grid lg:grid-cols-main-grid lg:gap-6 sm:grid-cols-1 sm:gap-4">
      <div class="">
        <h1 class="text-2xl font-bold text-white py-3">Filter by</h1>
        <FilterTags 
        :items = myTags
        @send="getTechnologie"
        />
        <div class="grid grid-cols-3 gap-4 mt-6" v-if="filterData.showTechnologies">
          <div v-for="(techno,index) in filterData.technologies" :key="index" class="flex items-center ">
            <input v-model="datas" :id="`${index} ${techno.name}`" type="checkbox" :value="techno.name" class="w-4 h-4  bg-gray-100 border-gray-300 rounded">
            <label for="default-checkbox" class="ms-2 text-sm font-medium  whitespace-pre-wrap text-white"> {{ techno.name }} </label>
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
import  {type Card} from '@/types/card.type'
import type { Technology,Categories } from '~/types/tags.type';

type FilterData  = {
  showTechnologies:boolean,
  technologies:Technology[]
}
const filterData = reactive<FilterData>({
  showTechnologies:false,
  technologies:[]
})

const myTags = reactive<Categories[]>(tags.categories)




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

function getTechnologie(item:Technology[]) {
  filterData.technologies = item
  filterData.showTechnologies = true
}



</script>

<style scoped>

</style>


~/types/card.type