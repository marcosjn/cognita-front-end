import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.config.devtools = true;

//Vue.http.interceptors.push((request, next) => {
//  request.headers.set('Authorization', 'Bearer 123');
  //request.headers.set('Authorization', 'Basic base64(client_id:client_secret)');
  //request.headers.set('x-access-token', 'b1dafb47-2cfb-4f77-abd6-492934b02563');
  //request.headers.set('Accept', 'application/json');
//  next() 
//})

const router = new VueRouter({ 
  routes,
  mode: 'history' 
});

new Vue({
  el: '#app',
  router, 
  render: h => h(App)
})
