import { createStore } from 'vuex';

export default createStore({
  modules : {},
  state(){
    return { searchingBy : '', movies : [], moviesTotalCount : 0 };
  },
  getters : {},
  mutations : {
    assignState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key];
      });
    },
    updateSearchingBy(state, newValue){
      state.searchingBy = newValue;
    }
  },
  actions : {
    async searchMovie({ commit }, payload){
      const { searchingBy, page } = payload;
      const movies = await _request(`s=${searchingBy}&page=${page}`);
      if (movies.Response === 'True'){
        commit('assignState', { movies : movies.Search, moviesTotalCount : movies.totalResults });
      }
    }
  } 
});


const API_END_POINT = 'https://www.omdbapi.com';
const API_KEY = '7035c60c';

async function _request ( restParams, options ={}) {
  const res = await fetch(`${API_END_POINT}?apikey=${API_KEY}&type=movie&${restParams}`,
    { 
      ...options,
      method : 'GET' 
    })
    .then(res => res.json());
  return res;
}