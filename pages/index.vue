<template>
  <TheHeader />
  <main class="bg-color-main">
    <div class="container mx-auto py-8 grid lg:grid-cols-main-grid lg:gap-6 sm:grid-cols-1 sm:gap-4">
      <FilterTags 
        :items = tags
      />
      <div class="grid grid-cols-2 gap-4 "> 
        <Cards
          v-for="(item,index) in 30 " 
          :key="index"
        
        />
      </div>
      
    </div>
  </main>

  
  
</template>

<script setup lang="ts">
import tags from '@/data/tags.json'

console.log(tags)

</script>

<style scoped>

</style>


