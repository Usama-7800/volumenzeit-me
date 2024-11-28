<script setup>
import Carousel from 'primevue/carousel';
import 'primeicons/primeicons.css';
import { ref } from 'vue';
import DesignButton from '@/components/DesignButton.vue';

const products = ref([
  {
    name: 'Volumenzeit S 1',
    price: 22588,
    imageUrl: new URL('@/assets/images/watches/Volumenzeit_S-1.png', import.meta.url).href,
  },
  {
    name: 'Volumenzeit S 2',
    price: 17588,
    imageUrl: new URL('@/assets/images/watches/Volumenzeit_S-2.png', import.meta.url).href,
  },
  {
    name: 'Volumenzeit S 3',
    price: 20588,
    imageUrl: new URL('@/assets/images/watches/Volumenzeit_S-3.png', import.meta.url).href,
  },
  {
    name: 'Volumenzeit S 4',
    price: 22588,
    imageUrl: new URL('@/assets/images/watches/Volumenzeit_S-4.png', import.meta.url).href,
  },
  {
    name: 'Volumenzeit S 5',
    price: 17588,
    imageUrl: new URL('@/assets/images/watches/Volumenzeit_S-5.png', import.meta.url).href,
  },
  {
    name: 'Volumenzeit S 6',
    price: 20588,
    imageUrl: new URL('@/assets/images/watches/Volumenzeit_S-6.png', import.meta.url).href,
  },
]);

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1,
  },
]);

const getSeverity = (status) => {
  switch (status) {
    case 'INSTOCK':
      return 'success';

    case 'LOWSTOCK':
      return 'warn';

    case 'OUTOFSTOCK':
      return 'danger';

    default:
      return null;
  }
};
</script>

<template>
  <div data-watch="navigator" data-watch-margin="-45%" class="watches bg-white pt-[4.6875rem] sm:pt-[5rem] lg:pt-[6.25rem]">
    <div class="watches__container mx-auto box-content max-w-[76.375rem] px-[.9375rem]">
      <h3 class="watches__text-nav box-border text-center font-spaceAge text-[1.75rem] font-[400] leading-6 text-black sm:text-[2rem] lg:text-start lg:text-[2.625rem]" data-aos="fade-right" data-aos-anchor=".watches__container">Watches</h3>
      <p class="watches__text-nav mt-[1.875rem] box-border leading-7 sm:mt-[2.1rem] lg:mt-[2.5rem] lg:w-[43.125rem]" data-aos="fade-right" data-aos-delay="50" data-aos-anchor=".watches__container">Volumenzeit gives you a total of 48 style combinations with 4 dial types, 4 dial colors, 3 case colors, multiple stylish strap combinations, and customized engraving options.</p>
      <div data-aos="fade-up" class="watches__slider swiper mt-[1.875rem] box-border overflow-hidden sm:mt-[3rem] lg:mt-[5rem]">
        <div class="card">
          <Carousel :showIndicators="false" :value="products" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" :circular="true" prevIcon="custom-prev" nextIcon="custom-next">
            <template #item="slotProps">
              <div class="watches__slide swiper-slide h-full">
                <a href="#" class="group flex h-full flex-col items-center gap-8">
                  <div class="watches__img-block h-[16rem] rounded-xl bg-[radial-gradient(50.17%_50.17%_at_50.03%_49.91%,_#f9fafe_36.92%,_#f1f4fb_100%)] px-[25px] lg:h-[24.5425rem]">
                    <img :src="slotProps.data.imageUrl" :alt="slotProps.data.image" class="m-auto h-[95%] transition-all duration-200 ease-in-out group-hover:scale-95" />
                  </div>
                  <p class="mt-8 text-center text-[1rem] leading-3 text-[#939393] md:mt-10 lg:mt-12">{{ slotProps.data.name }}</p>
                  <h6 class="text-center text-[1.625rem] leading-6 text-black lg:mb-8">${{ slotProps.data.price }}</h6>
                </a>
              </div>
            </template>

            <template #nexticon>
              <div><i class="pi pi-arrow-right hidden"></i></div>
            </template>
            <template #previcon>
              <div><i class="pi pi-arrow-left"></i></div>
            </template>
          </Carousel>
        </div>
        <div data-aos="fade-up" class="z-0 mt-[3.75rem] pb-[1.875rem] pt-[5px] text-center lg:ml-60 lg:mr-16 lg:text-end">
          <DesignButton label="Design Your Watch" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.p-carousel-next-button {
  color: black !important;
  position: absolute !important;
  left: 180px !important;
  bottom: 00px !important  ;
}
.p-carousel-next-button:hover {
  background-color: #f8fafc !important;
}
.p-carousel-prev-button {
  color: black !important;
  position: absolute !important;
  left: 50px !important;
  bottom: 00px !important  ;
}
.p-carousel-prev-button:hover {
  background-color: #f8fafc !important;
}
@media (max-width: 1024px) {
  .p-carousel-next-button,
  .p-carousel-prev-button {
    display: none !important;
  }
}
</style>
