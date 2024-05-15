<template>
 <div class="">
  <TheHeader @get-search-value="getSearchValue" />
  <main id="top" 
    class="bg-color-main
     sm:px-6 h-screen
     overflow-auto
      scrollbar-thumb-yellow
      scrollbar-thumb-rounded
      scrollbar-track-yellow-lighter
      scrollbar-w-2
      scrolling-touch
      ">
    <div
      class="md:container md:mx-auto px-4 md:px-0 py-8 grid lg:grid-cols-main-grid lg:gap-6 sm:grid-cols-1 sm:gap-4"
    >
      <!-- Mon filtre -->
      <div
        :class="{
          'lg:sticky lg:h-[580px] lg:top-[1px]': filteredDevelopers.length >= 4,
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
    <IconsTop width="1.1em" height="1.1em" /> 
  </nuxt-link>
 </div>
</template>

<script setup lang="ts">
import tags from "@/data/tags.json";
import { usersDev } from "~/data/users";
import { type Card } from "@/types/card.type";
import type { Technology, Categories,UserTagCounts } from "~/types/tags.type";

type FilterData = {
  showTechnologies: boolean;
  technologies: Technology[];
  currentTag: string;
};
const filterData = reactive<FilterData>({
  showTechnologies: false,
  technologies: [],
  currentTag: 'All'
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

onMounted(() => {
  const tagCounts = countUsersByTag(usersDev)
  myTags.forEach((category:Categories) => {
    // Vérifier si la catégorie existe dans les données de tagCounts
    if (tagCounts[category.name]) {
      category.nbre = tagCounts[category.name];
    } else {
      category.nbre = 0; // Si la catégorie n'existe pas, nbre est mis à 0
    }
  });
  
 
})

function getTechnologie(item: Categories) {    
  filterData.technologies = item.technologies;
  filterData.currentTag = item.name;
  filterData.showTechnologies = item.name !== 'All';
  technologyCheckbox.value = [];
  
  // filterData.showTechnologies = true;
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

  if(filterData.currentTag === 'All') {
    return data;
  }

  if (technologies.length === 0 && filterData.currentTag) {
    return searchByTags(filterData.currentTag);
  }

  data.forEach((item) => {
    const itemTechnologies = item.technology;
    // if (technologies.every((tech) => itemTechnologies.includes(tech))) {
    //   matchingItems.push(item);
    // }
    if (technologies.some((tech) => itemTechnologies.includes(tech))) {
      matchingItems.push(item);
    }
  });

  return matchingItems;
}

function searchByTags(tag: string) {
  return cardProps.filter((developer) => {
    return developer.tags.includes(tag);
  });
}

watch(technologyCheckbox, (newValue: string[], oldValue: string[]) => {
  isThisSearch.value = false;
  filtreUserData = [];
  filtreUserData = searchByTechnologies(cardProps, newValue);
});
watch(searchQuery, (newValue: string, oldValue: string) => {
  //alert('ddd')
  // if  {
  //   isThisSearch.value = false;
  // }
  isThisSearch.value = !(newValue.length === 0 && filterData.currentTag !== 'All');
  //technologyCheckbox.value = []
});

function countUsersByTag(users: Card[]) {
  const tagCounts: UserTagCounts = {};

  // Parcourir chaque utilisateur
  users.forEach(user => {
    // Parcourir chaque tag de l'utilisateur
    user.tags.forEach(tag => {
      // Incrémenter le compteur pour ce tag
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  // Calculer la somme totale des utilisateurs pour tous les tags
  const totalCount = Object.values(tagCounts).reduce((total, count) => total + count, 0);

  // Ajouter la clé spéciale "All" avec la somme totale
  tagCounts.All = totalCount;

  return tagCounts;
}


</script>

<style scoped>
.scrollbar-w-2::-webkit-scrollbar {
  width: 0.6rem;
  height: 0.4rem;
  cursor: pointer;

}

.scrollbar-track-yellow-lighter::-webkit-scrollbar-track {
  background-color:  #1e293b;
  cursor: pointer;
}

.scrollbar-thumb-yellow::-webkit-scrollbar-thumb {
  background-color: #FBCF16;
  cursor: pointer;
}

.scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
  border-radius: 0rem;
}
</style>
