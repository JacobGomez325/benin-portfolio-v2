<template>
  <TheHeader @get-search-value="getSearchValue" />
  <main class="bg-color-main">
    <div class="container mx-auto py-8 grid lg:grid-cols-main-grid lg:gap-6 sm:grid-cols-1 sm:gap-4">
      <div class=" sticky h-[280px] top-[1px]">
        <h1 class="text-2xl font-bold text-white py-3">Filter by</h1>
        <FilterTags 
        :items = myTags
        @send="getTechnologie"
        />
        <div class="grid grid-cols-2 gap-4 mt-6" v-if="filterData.showTechnologies">
          <div v-for="(techno,index) in filterData.technologies" :key="index" class="flex items-center ">
            <input v-model="technologyCheckbox" :id="`${index} ${techno.name}`" type="checkbox" :value="techno.name" class="w-4 h-4  bg-gray-100 border-gray-300 rounded">
            <label for="default-checkbox" class="ms-2 text-sm font-medium  whitespace-pre-wrap text-white"> {{ techno.name }} </label>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-2 gap-4 "> 
        <Cards
          v-for="(item,index) in filteredDevelopers " 
          :key="index"
          v-bind="item"
        />
      </div>
      
    </div>
  </main>

  
  
</template>

<script setup lang="ts">
import tags from '@/data/tags.json'
import { usersDev } from '~/data/users'
import  {type Card} from '@/types/card.type'
import type { Technology,Categories } from '~/types/tags.type'


type FilterData  = {
  showTechnologies:boolean,
  technologies:Technology[]
}
const filterData = reactive<FilterData>({
  showTechnologies:false,
  technologies:[]
})

// all categories
const myTags = reactive<Categories[]>(tags.categories)
// devs list
const cardProps = reactive<Card[]>(usersDev)
// technology list data
const technologyCheckbox = ref([])
const searchQuery = ref<string>('')

function getTechnologie(item:Technology[]) {
  filterData.technologies = item
  filterData.showTechnologies = true
}

// get Search value in the Header component 
function getSearchValue(searchItem:string) {
  searchQuery.value = searchItem
}

const filteredDevelopers = computed(() => {
  return cardProps.filter(developer => {
    // Recherche par tags
  const tagsMatch = developer.tags.some(tag =>
    tag.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
  // Recherche par technologies
  const techMatch = developer.technology.some(tech =>
    tech.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
  // Retourne vrai si le développeur a un tag ou une technologie correspondante
  return tagsMatch || techMatch 
  })
})






</script>

<style scoped>

</style>


