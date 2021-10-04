import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home';
import Search from './Search';
import Movie from './Movie';
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
      name : 'Movie',
      path : '/movie/:id',
      component : Movie
    },
    {
      path : '/:notFound(.*)',
      component : NotFound
    }
    
  ]

});