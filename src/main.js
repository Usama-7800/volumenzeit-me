import { createApp } from 'vue';
import './style.css';
import VueApp from './App.vue';
import PrimeVue from 'primevue/config';
import Lara from '@primevue/themes/lara';
import { definePreset } from '@primevue/themes';
import router from './router';
import 'primeicons/primeicons.css';
import Tooltip from 'primevue/tooltip';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import KeyFilter from 'primevue/keyfilter';

const CustomizedLara = definePreset(Lara, {
  semantic: {
    primary: {
      50: '{gray.50}',
      100: '{gray.100}',
      200: '{gray.200}',
      300: '{gray.300}',
      400: '{gray.400}',
      500: '{gray.500}',
      600: '{gray.600}',
      700: '{gray.700}',
      800: '{gray.800}',
      900: '{gray.900}',
      950: '{gray.950}',
    },
  },
});

const app = createApp(VueApp);

app.directive('tooltip', Tooltip);
app.directive('keyfilter', KeyFilter);

app.use(ToastService);
app.use(ConfirmationService);

app.use(PrimeVue, {
  theme: {
    preset: CustomizedLara,
    options: {
      darkModeSelector: false,
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities',
      },
    },
  },
});

app.use(router);
app.mount('#app');
