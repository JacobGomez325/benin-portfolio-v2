<template>
  <header class="bg-secondary  py-6">
    <div class="container mx-auto">
      <TheNavbar @get-search-value="getSearchValue" />
      <div class="header-contnent my-6">
        <h1 class="text-5xl font-bold text-white pt-1 pb-2 ">Benin Portfolios</h1>
        <p class="text-2xl font-medium text-white py-2">Open source collection of Benin portfolios</p>
      </div>
      <my-button 
        text-color = "text-white font-bold" 
        bordere  = "border border-primary outline-none"
        animation = "hover:text-secondary hover:bg-primary  transition-all duration-200"
        other-style = "p-4 rounded-md text-xl"
      > <a href="https://github.com/JacobGomez325/benin-porfolio-dev" target="_blank">Contribute on github </a> </my-button>
    </div>
  </header>
</template>


<script setup lang="ts">

const searchData = ref<string> ('')
const emits = defineEmits(['getSearchValue'])
function getSearchValue(search:string) {
  searchData.value = search 
}

watch(searchData, (newValue:string, oldValue:string) => {
  emits('getSearchValue',newValue)
})
</script>

<style>
</style>