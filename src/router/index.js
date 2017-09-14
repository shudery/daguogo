import Vue from 'vue';
import Router from 'vue-router';
import ElementUI from 'element-ui';
import Some from '../components/Some';
import About from '../components/About';
import Home from '../components/Home';

Vue.use(Router);
Vue.use(ElementUI);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/some',
      name: 'Some',
      component: Some,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});
