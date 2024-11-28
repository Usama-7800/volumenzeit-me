<script setup lang="js">
import FilterMain from '../WatchesMain/leftside/FilterMain.vue';
import MobileFilter from './leftside/MobileFilter.vue';
import ProductsItems from '../WatchesMain/rightside/ProductsItems.vue';
</script>

<template>
  <div class="mx-auto grid bg-white md:grid-cols-[283px_1fr] lg:grid-cols-[363px_1fr] 2xl:max-w-[76.375rem]">
    <!-- filter / leftside for large screens -->
    <FilterMain :ShowFilters="true" />

    <!-- filter / leftside for small screens -->
    <MobileFilter />

    <!-- rightside -->
    <ProductsItems />
  </div>
</template>

<style scoped>
.filter_heading {
  font-size: 10px;
  font-weight: 700;
  color: black;
}
</style>
