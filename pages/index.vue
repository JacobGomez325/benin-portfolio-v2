<template>
  <TheHeader @get-search-value="getSearchValue" />

  <main id="top" class="bg-color-main">
    <div
      class="md:container md:mx-auto px-4 md:px-0 py-8 grid lg:grid-cols-main-grid lg:gap-6 sm:grid-cols-1 sm:gap-4"
    >
      <!-- Mon filtre -->
      <div
        :class="{
          'sticky h-[580px] top-[1px]': filteredDevelopers.length >= 4,
          'static h-full': filteredDevelopers.length < 4,
        }"
      >
        <h1 class="text-2xl font-bold text-white py-3">Filter by</h1>
        <FilterTags :items="myTags" @send="getTechnologie" />
        <div
          class="grid md:grid-cols-2 grid-cols-2 gap-4 mt-6 md:mb-1 mb-4"
          v-if="filterData.showTechnologies"
        >
          <div
            v-for="(techno, index) in filterData.technologies"
            :key="index"
            class="flex items-center"
          >
            <input
              v-model="technologyCheckbox"
              :id="`checkbox-${index}`"
              type="checkbox"
              :value="techno.name"
              class="w-4 h-4 bg-gray-100 cursor-pointer border-gray-300 rounded"
            />
            <label
              :for="`checkbox-${index}`"
              class="ms-2 text-sm font-medium whitespace-pre-wrap text-white"
            >
              {{ techno.name }}
            </label>
          </div>
        </div>
      </div>

      <!-- Mon contenue principal -->
      <div v-if="isThisSearch">
        <div v-if="filteredDevelopers.length === 0">
          <empty-state>Aucun profil ne match ce filtre</empty-state>
        </div>
        <div v-else class="grid md:grid-cols-2 grid-cols-1 gap-4">
          <Cards
            v-for="(item, index) in filteredDevelopers"
            :key="index"
            v-bind="item"
          />
        </div>
      </div>
      <div v-else>
        <div v-if="filtreUserData.length === 0">
          <empty-state>Aucun profil ne match ce filtre</empty-state>
        </div>
        <div v-else class="grid md:grid-cols-2 grid-cols-1 gap-4">
          <Cards
            v-for="(item, index) in filtreUserData"
            :key="index"
            v-bind="item"
          />
        </div>
      </div>
    </div>
  </main>
  <TheFooter />
  <nuxt-link
    @click="scrollToTop()"
    class="bg-primary fixed md:right-10 right-8 md:bottom-5 bottom-3 p-2 rounded-full"
  >
    <svg
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      height="1.3em"
      width="1.3em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <desc></desc>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
      ></path>
    </svg>
  </nuxt-link>
</template>

<script setup lang="ts">
import tags from "@/data/tags.json";
import { usersDev } from "~/data/users";
import { type Card } from "@/types/card.type";
import type { Technology, Categories } from "~/types/tags.type";

type FilterData = {
  showTechnologies: boolean;
  technologies: Technology[];
};
const filterData = reactive<FilterData>({
  showTechnologies: false,
  technologies: [],
});

const isThisSearch = ref<boolean>(true);

// all categories
const myTags = reactive<Categories[]>(tags.categories);
// devs list
let cardProps = reactive<Card[]>(usersDev);

let filtreUserData = reactive<Card[]>([]);
// technology list data
const technologyCheckbox = ref([]);
const searchQuery = ref<string>("");

function getTechnologie(item: Technology[]) {
  filterData.technologies = item;
  technologyCheckbox.value = [];
  filterData.showTechnologies = true;
}

// get Search value in the Header component
function getSearchValue(searchItem: string) {
  searchQuery.value = searchItem;
}

const filteredDevelopers = computed(() => {
  return cardProps.filter((developer) => {
    // Recherche par nom de développeur
    const nameMatch = developer.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());

    // Recherche par tags
    const tagsMatch = developer.tags.some(
      (tag) =>
        tag && tag.toLowerCase().includes(searchQuery.value.toLowerCase())
    );

    // Recherche par technologies
    const techMatch = developer.technology.some(
      (tech) =>
        tech && tech.toLowerCase().includes(searchQuery.value.toLowerCase())
    );

    // Retourne vrai si le développeur a un nom, un tag ou une technologie correspondante
    return nameMatch || tagsMatch || techMatch;
  });
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function searchByTechnologies(data: Card[], technologies: string[]) {
  const matchingItems: Card[] = [];

  data.forEach((item) => {
    const itemTechnologies = item.technology;
    if (technologies.every((tech) => itemTechnologies.includes(tech))) {
      matchingItems.push(item);
    }
  });

  return matchingItems;
}

watch(technologyCheckbox, (newValue: string[], oldValue: string[]) => {
  isThisSearch.value = false;
  filtreUserData = [];
  filtreUserData = searchByTechnologies(cardProps, newValue);
});
watch(searchQuery, (newValue: string, oldValue: string) => {
  //alert('ddd')
  isThisSearch.value = true;
  //technologyCheckbox.value = []
});
</script>

<style scoped></style>
