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
    pushMovies(state, payload) {
      payload.movies.forEach((movie) => state.movies.push(movie));
    },
    updateSearchingBy(state, newValue){
      state.searchingBy = newValue;
    }
  },
  actions : {
    async searchMovies({ commit }, payload){
      const { searchingBy, page } = payload;
      const movies = await _request(`s=${searchingBy}&page=${page}`);
      if (movies.Response === 'True'){
        commit('pushMovies', { movies : movies.Search });
        commit('assignState', { moviesTotalCount : movies.totalResults });
      }
      else {
        // commit('assignState', { movies : [], moviesTotalCount : 0 });
      }
    },
    async getMovieById(context, payload) {
      const { id, plot } = payload;
      const movie = await _request(`i=${id}&plot=${plot}`);
      if (movie.Response === 'True'){
        return movie;
      }
    }
  } 
});


const API_END_POINT = 'https://www.omdbapi.com';
const API_KEY = '7035c60c';

async function _request ( restParams) {
  const res = await fetch(`${API_END_POINT}?apikey=${API_KEY}&type=movie&${restParams}`,
    { method : 'GET' })
    .then(res => res.json());
  return res;
}