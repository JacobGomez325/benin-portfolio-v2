<template>
  <div>
    okey mon composant est bon 

    <pre class="text-white">
      {{ props.items }}
    </pre>
  </div>

</template>

<script setup lang="ts">
const props = defineProps({
  items:{
    type:Object
  }
})


</script>


<style></style>