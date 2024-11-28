<script setup lang="js">
import FilterMain from '../WatchesMain/leftside/FilterMain.vue';
import MobileFilter from '../WatchesMain/leftside/MobileFilter.vue';
import AccessoriesItems from '../AccessoriesMain/AccessoriesItems.vue';
</script>

<template>
  <div class="mx-auto grid bg-white md:grid-cols-[283px_1fr] lg:grid-cols-[363px_1fr] 2xl:max-w-[76.375rem]">
    <!-- filter / leftside for large screens -->
    <FilterMain :ShowFilters="false" />

    <!-- filter / leftside for small screens -->
    <MobileFilter />

    <!-- rightside -->
    <AccessoriesItems />
  </div>
</template>
