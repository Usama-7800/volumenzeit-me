<script setup lang="js">
import { ref, computed } from 'vue';
import Paginator from 'primevue/paginator';

const products = ref([
  { name: 'Heart Song 1', price: 297, color: 'Fuchsia Tinge', imageUrl: new URL('@/assets/images/warchespage/watches/watches1.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches1.webp', import.meta.url).href },
  { name: 'Heart Song 10', price: 297, color: 'Fuchsia Tinge', imageUrl: new URL('@/assets/images/warchespage/watches/watches3.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches3.webp', import.meta.url).href },
  { name: 'Heart Song 105', price: 297, color: 'Niello', imageUrl: new URL('@/assets/images/warchespage/watches/watches7.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches7.webp', import.meta.url).href },
  { name: 'Heart Song 106', price: 297, color: 'Niello', imageUrl: new URL('@/assets/images/warchespage/watches/watches5.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches5.webp', import.meta.url).href },
  { name: 'Heart Song 107', price: 297, color: 'Niello', imageUrl: new URL('@/assets/images/warchespage/watches/watches4.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches4.webp', import.meta.url).href },
  { name: 'Heart Song 108', price: 297, color: 'Niello', imageUrl: new URL('@/assets/images/warchespage/watches/watches7.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches7.webp', import.meta.url).href },
  { name: 'Heart Song 109', price: 297, color: 'Niello', imageUrl: new URL('@/assets/images/warchespage/watches/watches9.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches9.webp', import.meta.url).href },
  { name: 'Heart Song 111', price: 297, color: 'Fuchsia Tinge', imageUrl: new URL('@/assets/images/warchespage/watches/watches2.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches2.webp', import.meta.url).href },
  { name: 'Heart Song 110', price: 297, color: 'Niello', imageUrl: new URL('@/assets/images/warchespage/watches/watches10.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches10.webp', import.meta.url).href },
  { name: 'Heart Song 111', price: 297, color: 'Niello', imageUrl: new URL('@/assets/images/warchespage/watches/watches12.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches12.webp', import.meta.url).href },
  { name: 'Heart Song 112', price: 297, color: 'Niello', imageUrl: new URL('@/assets/images/warchespage/watches/watches8.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches8.webp', import.meta.url).href },
  { name: 'Heart Song 113', price: 297, color: 'Niello', imageUrl: new URL('@/assets/images/warchespage/watches/watches11.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches11.webp', import.meta.url).href },

  { name: 'Heart Song 105', price: 297, color: 'Niello', imageUrl: new URL('@/assets/images/warchespage/watches/watches7.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches7.webp', import.meta.url).href },
  { name: 'Heart Song 106', price: 297, color: 'Niello', imageUrl: new URL('@/assets/images/warchespage/watches/watches5.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches5.webp', import.meta.url).href },
  { name: 'Heart Song 107', price: 297, color: 'Niello', imageUrl: new URL('@/assets/images/warchespage/watches/watches4.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches4.webp', import.meta.url).href },
  { name: 'Heart Song 105', price: 297, color: 'Niello', imageUrl: new URL('@/assets/images/warchespage/watches/watches7.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches7.webp', import.meta.url).href },
  { name: 'Heart Song 106', price: 297, color: 'Niello', imageUrl: new URL('@/assets/images/warchespage/watches/watches5.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches5.webp', import.meta.url).href },
  { name: 'Heart Song 107', price: 297, color: 'Niello', imageUrl: new URL('@/assets/images/warchespage/watches/watches4.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches4.webp', import.meta.url).href },
  { name: 'Heart Song 105', price: 297, color: 'Niello', imageUrl: new URL('@/assets/images/warchespage/watches/watches7.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches7.webp', import.meta.url).href },
  { name: 'Heart Song 106', price: 297, color: 'Niello', imageUrl: new URL('@/assets/images/warchespage/watches/watches5.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches5.webp', import.meta.url).href },
  { name: 'Heart Song 106', price: 297, color: 'Niello', imageUrl: new URL('@/assets/images/warchespage/watches/watches5.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches5.webp', import.meta.url).href },
  { name: 'Heart Song 106', price: 297, color: 'Niello', imageUrl: new URL('@/assets/images/warchespage/watches/watches5.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches5.webp', import.meta.url).href },
  { name: 'Heart Song 107', price: 297, color: 'Niello', imageUrl: new URL('@/assets/images/warchespage/watches/watches4.webp', import.meta.url).href, hoverImageUrl: new URL('@/assets/images/warchespage/watches2/watches4.webp', import.meta.url).href },
]);

const currentPage = ref(1);
const itemsPerPage = 12;

const paginatedProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  return products.value.slice(startIndex, startIndex + itemsPerPage);
});

const totalPages = computed(() => Math.ceil(products.value.length / itemsPerPage));

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};
</script>

<template>
  <div class="min-h-[850px]">
    <div class="gap- mb-[70px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <ul v-for="product in paginatedProducts" :key="product.name" class="h-full w-full pt-[24px]">
        <li class="m-0 text-center text-black" data-aos="fade-up">
          <a href="#" class="group relative mb-[15px] flex w-full flex-col items-center gap-y-1 text-center" @mouseenter="product.isHovered = true" @mouseleave="product.isHovered = false">
            <div class="h-full w-full rounded-xl">
              <img :src="product.isHovered ? product.hoverImageUrl : product.imageUrl" :alt="product.name" class="m-auto h-[300px] w-full object-cover transition-all duration-200 ease-in-out group-hover:scale-95" />
            </div>
            <h3 class="mb-1 text-center text-sm font-[500] leading-3 text-black">{{ product.name }}</h3>
            <p class="mB-1 leading-extra-loose text-center text-[10px] leading-3 text-[#939393]">{{ product.color }}</p>
            <h6 class="text-center text-lg leading-none text-black">€{{ product.price }}</h6>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <!-- <Paginator :rows="10" :totalRecords="120" :rowsPerPageOptions="[10, 20, 30]"></Paginator> -->

  <div class="mt-6 grid w-full grid-cols-1 items-center justify-between lg:grid-cols-2">
    <div class="flex items-center justify-center lg:justify-start">
      <button @click="prevPage" :disabled="currentPage === 1" class="mx-2 rounded-md bg-customPurple px-4 py-2 text-white disabled:opacity-50">Previous</button>

      <div class="flex">
        <button v-for="page in totalPages" :key="page" @click="goToPage(page)" :class="['mx-1 rounded-md px-4 py-2', currentPage === page ? 'bg-customPurple text-white' : 'bg-gray-200 hover:bg-gray-300']">
          {{ page }}
        </button>
      </div>

      <button @click="nextPage" :disabled="currentPage === totalPages" class="mx-2 rounded-md bg-customPurple px-4 py-2 text-white disabled:opacity-50">Next</button>
    </div>

    <div class="mt-20 text-center lg:mt-0 lg:text-end">
      <RouterLink to="#" class="rounded-[5px] bg-customPurple px-[44px] py-[20px] text-white lg:pl-[109px] lg:pr-[109px]"> Design Your Watch </RouterLink>
    </div>
  </div>
</template>
