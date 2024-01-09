<template>
  <div class="flex justify-between items-center mb-4">
    <div>
      <span class="bg-primary p-1 inline-block  rounded-sm">
        <IconsTags color="text-secondary"  height="2.8em" width="2.8em" />
      </span>
    </div>

    <div class="flex space-x-4 items-center ">
      <MySearchBar styles="bg-white text-sm rounded-md outline-none px-4 py-2 placeholder-black " placeholdere = "Search a portfolio ..." />
      <my-button 
        text-color = "text-secondary font-semibold " 
        bg-color= "bg-primary"
        bordere  = "border border-primary outline-none"
        animation = "hover:opacity-80  transition-all duration-200"
        other-style = "px-4 py-2 rounded-md text-sm"
      >add your portfolio</my-button>
    </div>
    
  </div>
  <hr />
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>