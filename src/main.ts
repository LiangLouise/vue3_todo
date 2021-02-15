import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'weui';

// Force to use light mode
document.body.setAttribute('data-weui-theme', 'light');

createApp(App).use(router).mount('#app');