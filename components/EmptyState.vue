<template>
  <div
    class="flex flex-col bg-white h-[300px] w-full justify-center items-center text-center rounded shadow p-4"
  >
    <div class="flex my-5 justify-center">
      <span>
        <IconsEmpty class="w-[149px] h-[142px]" />
      </span>
    </div>
    <div class="flex my-3 w-full justify-center">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
