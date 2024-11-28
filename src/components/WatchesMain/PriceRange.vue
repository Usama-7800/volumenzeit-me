<script setup>
import Slider from 'primevue/slider';
import { ref } from 'vue';

const value = ref([20, 80]);
// Slider state variables
// const minPrice = ref(0); // Initial minimum value
// const maxPrice = ref(300); // Initial maximum value
// const maxLimit = 300; // Maximum value limit

// // Computed properties for slider handle positions
// const leftPosition = computed(() => (minPrice.value / maxLimit) * 100);
// const rightPosition = computed(() => (maxPrice.value / maxLimit) * 100);

// // Update minimum slider value
// const updateMinPrice = (value) => {
//   const newValue = parseInt(value, 10);
//   if (newValue < maxPrice.value) {
//     minPrice.value = newValue;
//   }
// };

// // Update maximum slider value
// const updateMaxPrice = (value) => {
//   const newValue = parseInt(value, 10);
//   if (newValue > minPrice.value) {
//     maxPrice.value = newValue;
//   }
// };
</script>
<template>
  <div class="mx-auto w-full max-w-md px-1">
    <div class="relative pb-4 pt-6">
      <!-- <div class="h-1 rounded-full bg-gray-200">
        <div class="absolute h-1 rounded-full bg-[#939393]" :style="{ left: `${leftPosition}%`, right: `${100 - rightPosition}%` }"></div>

        <div class="absolute -mt-1.5 h-4 w-4 -translate-x-1/2 transform cursor-pointer rounded-full border-2 border-black bg-white shadow-md hover:-mt-1 hover:h-5 hover:w-5 hover:bg-black" :style="{ left: `${leftPosition}%` }">
          <input type="range" min="0" :max="maxLimit" step="1" :value="minPrice" @input="updateMinPrice($event.target.value)" class="absolute h-full w-full cursor-pointer opacity-0" />
        </div>

        <div class="absolute -mt-1.5 h-4 w-4 -translate-x-1/2 transform cursor-pointer rounded-full border-2 border-black bg-white shadow-md hover:-mt-1 hover:h-5 hover:w-5 hover:bg-black" :style="{ left: `${rightPosition}%` }">
          <input type="range" min="0" :max="maxLimit" step="1" :value="maxPrice" @input="updateMaxPrice($event.target.value)" class="absolute h-full w-full cursor-pointer opacity-0" />
        </div>
      </div> -->

      <div class="card flex justify-center">
        <Slider v-model="value" range class="w-56" :min="0" :max="300" />
      </div>
      <div class="mt-4 flex justify-between text-[.875em] text-gray-600">
        <input type="text" :value="`€ 0`" class="w-auto max-w-[60px] p-[8px] text-center" />
        <input type="text" :value="`€ 300`" class="w-auto max-w-[60px] p-[8px] text-center" />
      </div>
    </div>
  </div>
</template>
