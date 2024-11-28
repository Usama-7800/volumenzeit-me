<script setup lang="js">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Icon } from '@iconify/vue';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false);
const route = useRoute();

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header data-scroll="60" class="md:px-1rem fixed z-20 flex w-full flex-row justify-center bg-custombgGray bg-opacity-90 px-3 py-3 md:py-[1.5rem] lg:mx-0 lg:w-full lg:px-4 lg:py-4">
    <div class="container m-auto mx-auto my-0 box-content flex max-w-[70rem] flex-row items-center justify-between py-2 lg:gap-7">
      <span data-aos="fade-right opacity-100">
        <RouterLink to="/" class="w m-0 text-customGray lg:p-0"> <img data-aos="fade-right" src="@/assets/images/logo.svg" alt="Logo" class="ml h-[30px] w-[260px] pr-8 lg:h-[34px] lg:w-[270px] lg:px-0" /></RouterLink>
      </span>

      <nav class="box-border hidden lg:flex lg:flex-[1_1_auto]">
        <ul class="mx-auto my-0 box-border flex max-w-[31.25rem] flex-wrap items-center justify-center gap-10 text-sm font-[500] text-customTextGray">
          <li data-aos="fade-right" data-aos-delay="100">
            <RouterLink to="/" :class="{ 'border-b border-customPurple pb-4 text-black transition-colors': route.path === '/' }" data-goto-top="120" data-goto=".home">Home</RouterLink>
          </li>
          <li data-aos="fade-right" data-aos-delay="250">
            <RouterLink to="/watches" :class="{ 'border-b border-customPurple pb-4 text-black transition-colors': route.path === '/watches' }" data-goto-top="120" data-goto=".watches">Watches</RouterLink>
          </li>
          <li data-aos="fade-right" data-aos-delay="150">
            <RouterLink to="/jewelry" :class="{ 'border-b border-customPurple pb-4 text-black transition-colors': route.path === '/features' }" data-goto-top="120" data-goto=".features">Jewelry</RouterLink>
          </li>
          <li data-aos="fade-right" data-aos-delay="200">
            <RouterLink to="/accessories" :class="{ 'border-b border-customPurple pb-4 text-black transition-colors': route.path === '/our-mission' }" data-goto-top="120" data-goto=".mission">Accessories</RouterLink>
          </li>
        </ul>
      </nav>
      <span data-aos="fade-left" data-aos-delay="200" class="hidden text-sm opacity-100 md:mr-8 md:block">
        <RouterLink to="#" class="decoration-none md:py[1.0625rem ] relative box-border rounded-md border-b-2 border-customPurple bg-customPurple px-[3.4rem] py-[18px] text-sm leading-3 text-white transition duration-700 ease-in-out hover:bg-white hover:text-customPurple md:px-[3.2rem] md:py-[12px]">Sign Up</RouterLink>
      </span>
    </div>
    <button @click="toggleMenu" class="z-20 text-3xl text-customTextGray lg:hidden" aria-label="Toggle menu">
      <span v-if="!isMenuOpen"><Icon icon="rivet-icons:menu" class="text-4xl text-customPurple" /> </span>
      <span v-else><Icon icon="rivet-icons:close" class="text-3xl text-customPurple" /></span>
    </button>
  </header>

  <div v-if="isMenuOpen" class="fixed inset-0 top-16 z-20 w-full bg-custombgGray lg:hidden">
    <div class="mx-auto flex w-fit flex-col items-center justify-center gap-10 font-[400]">
      <ul class="mx-auto my-2 flex w-fit max-w-[31.25rem] flex-col items-center justify-center gap-8 text-2xl font-semibold text-customTextGray">
        <li>
          <RouterLink to="/" class="box-border text-center opacity-100 transition-colors" :class="{ 'border-b border-customPurple pb-4 text-black transition-colors': route.path === '/' }" data-goto-top="120" data-goto=".home" @click="toggleMenu">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="#" :class="{ 'border-b border-customPurple pb-4 text-black transition-colors': route.path === '/features' }" data-goto-top="120" data-goto=".features" @click="toggleMenu">Features</RouterLink>
        </li>
        <li>
          <RouterLink to="/our-mission" :class="{ 'border-b border-customPurple pb-4 text-black transition-colors': route.path === '/our-mission' }" data-goto-top="120" data-goto=".mission" @click="toggleMenu">Our Mission</RouterLink>
        </li>
        <li>
          <RouterLink to="/watches" :class="{ 'border-b border-customPurple pb-4 text-black transition-colors': route.path === '/watches' }" data-goto-top="120" data-goto=".watches" @click="toggleMenu">Watches</RouterLink>
        </li>
        <li>
          <RouterLink to="/about-us" :class="{ 'border-b border-customPurple pb-4 text-black transition-colors': route.path === '/about-us' }" data-goto-top="120" data-goto=".about" @click="toggleMenu">About Us</RouterLink>
        </li>
      </ul>
      <button>
        <RouterLink to="#" class="decoration-none relative box-border rounded-md border-b-2 border-customPurple bg-customPurple p-[4rem] py-5 text-2xl leading-3 text-white transition duration-700 ease-in-out hover:bg-white hover:text-customPurple">Sign Up</RouterLink>
      </button>
    </div>
  </div>
</template>
