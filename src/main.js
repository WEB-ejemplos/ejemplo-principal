import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css' //icons

import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import OrderList from 'primevue/orderlist'


const app = createApp(App)

createApp(App)
    .use(PrimeVue)
    .component('InputText', InputText)
    .component('Button', Button)
    .component('Checkbox', Checkbox)
    .component('OrderList', OrderList)
    .mount('#app')
