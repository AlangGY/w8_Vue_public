import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home';

export default createRouter({
  history : createWebHistory(),
  scrollBehavior(){
    return { top : 0, behavior : 'smooth' };
  },
  routes : [
    {
      name : 'Home',
      path : '/',
      component : Home
    }
  ]

});