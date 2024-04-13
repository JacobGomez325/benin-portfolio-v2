<template>
  <header class="bg-secondary  py-6">
    <div class="md:container md:mx-auto px-4 md:px-0">
      <TheNavbar @get-search-value="getSearchValue" />
      <div class="header-contnent my-6">
        <h1 class="md:text-5xl text-3xl font-bold text-white pt-1 pb-2 ">Benin Portfolios</h1>
        <p class="md:text-2xl text-lg font-medium text-white py-2">Open source collection of Benin portfolios</p>
      </div>
      <my-button 
        text-color = "text-secondary font-bold " 
        bg-color= "bg-primary"
        bordere  = "border border-primary outline-none"
        animation = "hover:opacity-80  transition-all duration-200"
        other-style = "px-4 py-2 rounded-md text-md my-2"
        display="md:hidden block"
      >add your portfolio</my-button>
      <my-button 
        text-color = "text-white font-bold " 
        bordere  = "border border-primary outline-none"
        animation = "hover:text-secondary hover:bg-primary  transition-all duration-200"
        other-style = "md:p-4 px-4 py-2 rounded-md text-xl"
      > <a href="https://github.com/JacobGomez325/benin-porfolio-dev" class="text-sm md:text-base"target="_blank">Contribute on github </a> </my-button>
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