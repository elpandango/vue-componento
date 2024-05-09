import {createApp} from 'vue';
import {createPinia} from 'pinia';

import App from './App.vue';
import router from './router';

import SvgIcon from "@/components/svgComponents/SvgIcon.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('SvgIcon', SvgIcon);

app.mount('#app');
