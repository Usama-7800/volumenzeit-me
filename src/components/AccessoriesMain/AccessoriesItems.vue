<script setup lang="js">
import AccessoriesProducts from '../AccessoriesMain/AccessoriesProducts.vue';
import { useRoute } from 'vue-router';

import { ref } from 'vue';

const isDropdownOpen = ref(false);
const selectedOption = ref('Default');

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  isDropdownOpen.value = false;
};
</script>

<template>
  <div data-aos="fade-up" class="bg-re-600 w-full max-w-[825px] pt-2 lg:ml-4">
    <div class="flex flex-col items-center space-y-4 py-4 md:items-end">
      <div class="relative mx-0 w-48 md:mx-8">
        <i class="pi pi-angle-down pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500"></i>

        <button class="w-full appearance-none rounded bg-[#f9fafe] py-4 pl-6 pr-4 text-center shadow-sm focus:outline-none focus:ring-0" @click="toggleDropdown">
          <span>{{ selectedOption }}</span>
        </button>

        <ul v-show="isDropdownOpen" class="absolute left-0 z-10 mt-1 w-full rounded-md bg-white shadow-lg">
          <li @click="selectOption('Default')" class="cursor-pointer px-4 py-2 hover:bg-gray-200">Default</li>
          <li @click="selectOption('Popularity')" class="cursor-pointer px-4 py-2 hover:bg-gray-200">Popularity</li>
          <li @click="selectOption('What\'s New')" class="cursor-pointer px-4 py-2 hover:bg-gray-200">What's New</li>
          <li @click="selectOption('Price Low to High')" class="cursor-pointer px-4 py-2 hover:bg-gray-200">Price Low to High</li>
          <li @click="selectOption('Price High to Low')" class="cursor-pointer px-4 py-2 hover:bg-gray-200">Price High to Low</li>
        </ul>
      </div>
    </div>
    <AccessoriesProducts />
  </div>
</template>
