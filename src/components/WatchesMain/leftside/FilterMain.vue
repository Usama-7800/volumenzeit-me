<script setup lang="js">
import PriceRange from '../PriceRange.vue';
import Filters from '../Filters.vue';
import { useRoute } from 'vue-router';
import { RouterLink } from 'vue-router';

const props = defineProps({
  ShowFilters: {
    type: Boolean,
    default: true,
    // required: true,
  },
});
import { ref, watch } from 'vue';

watch(
  () => props.ShowFilters,
  (newVal) => {
    console.log('ShowFilters:', newVal);
  }
);

const route = useRoute();
</script>

<template>
  <!-- Filter/Leftside for large screens -->
  <div data-ao="fade-right" class="relative mr-[28px] hidden h-[978px] w-full justify-end bg-[#f9fafe] pb-[93px] pr-[50px] pt-[33px] text-[12px] md:flex">
    <div class="h-[78px] w-full max-w-[205px] space-y-2 text-start font-[400] text-[#939393]">
      <form action="" class="space-y-2 border-b-2 border-[#e4e3ea] pb-[11px]">
        <label class="filter_heading">Search</label>
        <div class="flex max-w-[100%] flex-nowrap">
          <input type="search" name="s" class="placeholder: min-w-[3rem] rounded-[10px] bg-white p-[6px]" placeholder="Type here..." />
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
      <!-- Conditionally render Filters -->
      <div v-if="ShowFilters">
        <Filters />
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter_heading {
  font-size: 10px;
  font-weight: 700;
  color: black;
}
</style>
