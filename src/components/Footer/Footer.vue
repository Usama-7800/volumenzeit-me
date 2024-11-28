<script setup>
import { useRoute } from 'vue-router';
</script>

<template>
  <div class="relative bottom-0 mt-[3.125rem] flex flex-col items-center justify-center bg-white sm:mt-[4rem] md:mt-[4.5rem] lg:mt-[5rem]">
    <div data-aos="fade-up" class="mx-auto w-full bg-white">
      <a href="/" class="flex w-full justify-center">
        <img class="mx-auto w-[90%] md:w-[30%]" src="@/assets/images/logo.svg" alt="Logo" />
      </a>
    </div>
    <div class="mt-[1.1rem] w-full bg-[#f9fafe] py-7 md:mt-[3.1rem]">
      <div class="text-center text-[0.6rem] text-[#939393] md:text-[12px]">
        <p data-aos="fade-up" data-aos-offset="0">© Copyright 2022 wolumenzeit - All rights reserved.</p>
      </div>
    </div>
  </div>
</template>
