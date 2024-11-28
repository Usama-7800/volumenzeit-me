<script setup lang="js">
import PriceRange from '../PriceRange.vue';
import Filters from '@/components/WatchesMain/Filters.vue';
import { useRoute } from 'vue-router';
import { RouterLink } from 'vue-router';

const route = useRoute();

import { ref } from 'vue';
import Button from 'primevue/button';
import Drawer from 'primevue/drawer';
const visibleTop = ref(false);
</script>

<template>
  <!-- filter / leftside for small screens -->
  <div class="bg-[#f9fafe] md:hidden">
    <div class="flex flex-row items-center justify-between px-6 pb-2 pt-4">
      <h2 class="font-spaceAge text-[16px] uppercase text-black">Filters</h2>
      <Button icon="pi pi-angle-down" class="border border-customPurple bg-transparent p-1 text-customPurple" style="font-size: 1.2rem" @click="visibleTop = true" />
    </div>
    <Drawer v-model:visible="visibleTop" header="Filter" blockScroll="true" position="top" class="relative top-52 h-fit overflow-y-auto bg-[#f9fafe] font-spaceAge">
      <div class="relative flex h-full w-full justify-center font-poppins text-[12px]">
        <div class="h-full w-full max-w-[265px] space-y-2 text-start font-[400] text-[#939393]" style="max-height: 500px">
          <form action="" class="space-y-2 border-b-2 border-[#e4e3ea] pb-[11px]">
            <label class="filter_heading">Search</label>
            <div class="flex max-w-[100%] flex-nowrap justify-between">
              <input type="search" name="s" class="placeholder: w-full min-w-[3rem] rounded-[10px] bg-white p-[6px]" placeholder="Type here..." />
              <button type="submit" class="ml-[5px] cursor-pointer break-words rounded-[5px] border border-[#7a56b1] bg-transparent p-[5px] py-[11px] text-[#7a56b1] placeholder:text-black">Search</button>
            </div>
          </form>
          <h3 class="filter_heading pt-[10px]">Select Products</h3>
          <div class="space-y-4 text-[12px]">
            <ul class="space-y-3">
              <li class="py-[5px] font-[400]">
                <RouterLink to="/Watches" :class="{ 'font-[600] text-black transition-colors': route.path === '/Watches' }">Watches</RouterLink>
              </li>
              <li class="py-[5px] font-[400]">
                <RouterLink to="#" :class="{ 'font-[600] text-black transition-colors': route.path === '/Jewelry' }">Jewelry</RouterLink>
              </li>
              <li class="py-[5px] font-[400]">
                <RouterLink to="#" :class="{ 'font-[600] text-black transition-colors': route.path === '/Accessories' }">Accessories</RouterLink>
              </li>
            </ul>
          </div>
          <div class="space-y-2 border-b-2 border-[#e4e3ea]">
            <div class="space-y-2">
              <h3 class="filter_heading pt-[10px] !font-[600] text-black">Filter by price</h3>
              <div class="mb-[24px]">
                <PriceRange />
              </div>
            </div>
          </div>
          <Filters />
        </div>
      </div>
    </Drawer>
  </div>
</template>
<style scoped>
.filter_heading {
  font-size: 10px;
  font-weight: 700;
  color: black;
}
</style>
