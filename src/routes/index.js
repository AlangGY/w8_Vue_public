import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home';
import Search from './Search';
import NotFound from './NotFound';

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

    },
    {
      name : 'Search',
      path : '/search/:keyword',
      component : Search
    },
    {
      path : '/:notFound(.*)',
      component : NotFound
    }
  ]

});