const moviesStore = {
  namespaced : true,
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
    },
    async getMovieById(context, payload) {
      const { id, plot } = payload;
      const movie = await _request(`i=${id}&plot=${plot}`);
      if (movie.Response === 'True'){
        return movie;
      }
    }
  } 
};

async function _request ( restParams) {
  const res = await fetch('/api/getmovies', {
    method : 'POST',
    body : JSON.stringify({ params : encodeURI(restParams) })
  }).then(data => data.json());
  return res.body;
}

export default moviesStore;