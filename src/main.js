import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';
import Header from './components/Header.vue';
import CigForm from './components/CigForm.vue';
import VapeForm from './components/VapeForm.vue';
import SavingsResults from './components/SavingsResults.vue';

Vue.use(BootstrapVue);

Vue.component('app-header', Header);
Vue.component('cig-form', CigForm);
Vue.component('vape-form', VapeForm);
Vue.component('savings-results', SavingsResults);

new Vue({
	el: '#app',
	render: (h) => h(App)
});
