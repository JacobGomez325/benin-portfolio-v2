<template>
  <footer class="py-3 bg-secondary px-6">
    <div
      class="md:container px-4 md:mx-auto items-center flex justify-between pr-20"
    >
      <div class="lg:text-base md:text-sm text-xs text-white font-semibold">
        &#9426; <span>{{ year }}</span> Benin Portfolios. All rights reserved
      </div>
      <div class="">
        <a
          href="https://github.com/JacobGomez325/benin-portfolio-v2"
          class="text-primary"
        >
        <!-- Utilisation de l'icône Github -->
          <IconsSocialsGithub width="1.8em" height="1.8em" />
        </a>
      </div>
    </div>
  </footer>
</template>


<script setup lang="ts">
import { ref } from "vue";

const year = ref(new Date().getFullYear());
</script>


<style lang="scss" scoped></style>




