import {createApp} from 'vue';
import {createPinia} from 'pinia';

import App from './App.vue';
import router from './router';

import SvgIcon from "@/components/svgComponents/SvgIcon.vue";
import DemonstrationBox from "@/components/demonstration/DemonstrationBox.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('SvgIcon', SvgIcon);
app.component('DemonstrationBox', DemonstrationBox);

app.mount('#app');
