<script setup>
import Toast from 'primevue/toast';
import Navbar from '../components/Navbar/Navbar.vue';
import Footer from '../components/Footer/Footer.vue';
</script>

<template>
  <div class="overflow-hidden">
    <Navbar />
    <main class="mt-[82px]">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
