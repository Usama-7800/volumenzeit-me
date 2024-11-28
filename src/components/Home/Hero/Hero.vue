<script setup>
import { RouterLink } from 'vue-router';
import DesignButton from '@/components/DesignButton.vue';
</script>

<template>
  <div data-watch="navigator" data-watch-threshold=".6" class="b-[#f9fafe] relative z-10 w-full justify-center overflow-hidden px-[0.9rem]">
    <div class=":px-[7.5rem] relative z-10 mx-auto my-0 w-full px-0 pb-[4.8rem] pt-[4.5rem] lg:px-[0rem] xl:px-[7.5rem]">
      <div class="">
        <h1 data-aos-anchor=".main__container" data-aos="fade-up" data-aos-delay="50" class="xl: mb-[1.3625rem] max-w-[35rem] text-center font-spaceAge text-[2.5rem] font-[400] leading-[3.125rem] text-black sm:text-[10px] md:mb-[1.5625rem] md:text-left md:text-[51px]">Find your dream watch</h1>
        <p data-aos-anchor=".main__container" data-aos="fade-up" data-aos-delay="100" class="mb-[4.375rem] max-w-[35rem] text-center leading-7 text-[#939393] md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim facilisi elementum commodo ipsum. Aenean aenean adipiscing lect</p>
        <div data-aos-anchor=".main__container" data-aos="fade-up" data-aos-delay="150" class="text-center md:text-left">
          <DesignButton label="Design Your Watch" />
        </div>
      </div>

      <div data-da=".main__container,1440" data-aos-anchor=".main__container" data-aos="fade-right" class="md-w-full z-10 mx-auto my-12 w-fit rounded-lg bg-white bg-opacity-60 px-4 text-center opacity-100 md:mx-0 md:my-8 md:bg-transparent md:px-0 md:text-left">
        <div class="main__left">
          <h6 class="whitespace-nowrap py-4 font-spaceAge text-[14px] font-normal leading-[12px] tracking-[0.44em] text-black">Follow us</h6>
          <ul class="main__social flex items-center gap-2.5 py-2 lg:justify-center">
            <li class="rounded-full bg-white shadow-md transition-all duration-300 ease-linear">
              <RouterLink to="/facebook"><img src="@/assets/images/hero/facebook.svg" alt="" class="main__social-img opacity-70 transition-all duration-300 ease-linear" /></RouterLink>
            </li>
            <li class="rounded-full bg-white shadow-md transition-all duration-300 ease-linear">
              <RouterLink to="/"><img src="@/assets/images/hero/pinterest.svg" alt="" class="main__social-img opacity-70 transition-all duration-300 ease-linear" /></RouterLink>
            </li>
            <li class="rounded-full bg-white shadow-md transition-all duration-300 ease-linear">
              <RouterLink to="/"><img src="@/assets/images/hero/twitter.svg" alt="" class="main__social-img opacity-70 transition-all duration-300 ease-linear" /></RouterLink>
            </li>
            <li class="rounded-full bg-white shadow-md transition-all duration-300 ease-linear">
              <RouterLink to="/"><img src="@/assets/images/hero/instagram.svg" alt="" class="main__social-img opacity-70 transition-all duration-300 ease-linear" /></RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="absolute -right-[90px] bottom-6 z-0 h-fit md:-right-[265px] md:bottom-0 md:top-0 lg:-right-[275px] lg:bottom-6">
      <img data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="1000" src="@/assets/images/hero/watch.png" alt="" class="main__img" />
    </div>
  </div>
</template>
