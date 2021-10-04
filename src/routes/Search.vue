<template>
  <section class="search__inner">
    <div class="search__keyword">
      {{ searchingBy }}
    </div>
    <div
      v-if="isLoading"
      class="search__loading">
      Loading...
    </div>
    <div
      v-else-if="searchingBy && movies.length === 0"
      class="search__error">
      No Result!
    </div>
    <ul
      v-else
      class="movies__grid">
      <li
        v-for="movie in movies"
        :key="movie.imdbID"
        class="movie__container"
        @click="getMovieById(movie.imdbID)">
        <img
          :src="movie.Poster"
          :alt="movie.Title"
          class="movie__poster">
        <div class="movie__title">
          {{ movie.Title }}
        </div>
      </li>
    </ul>
    <MovieViewer
      v-if="isMovieSelected"
      :selected-movie="selectedMovie"
      @close-viewer="closeViewer" />
  </section>
</template>

<script>
import MovieViewer from '~/components/MovieViewer';

export default {
  components : { MovieViewer },
  data(){
    return { 
      page : 1,
      selectedMovie : {},
      isLoading : false,
      isMovieSelected : false
    };
  },
  computed : {
    searchingBy(){
      return this.$route.params.keyword;
    },
    movies(){
      return this.$store.state.movies;
    },
    params(){
      return { searchingBy : this.searchingBy, page : this.page };
    }
  },
  watch : {
    $route() {
      this.searchMovies();
    }
  },
  created() {
    this.searchMovies();
  },
  methods : {
    async searchMovies(){
      this.isLoading = true;
      await this.$store.dispatch('searchMovies', this.params);
      this.isLoading = false;

    },
    async getMovieById(id){
      this.isMovieSelected = true;
      const movie = await this.$store.dispatch('getMovieById', { id, plot : 'full' });
      if(movie && this.isMovieSelected){
        this.selectedMovie = movie;
      }
    },
    closeViewer(){
      this.selectedMovie = {};
      this.isMovieSelected = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.search__inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
  height: 100%;
  .search__keyword {
    font-size: 32px;
    width: 500px;
    padding-bottom: 5px;
    margin-bottom: 20px;
    border-bottom: 1px solid $color-border;
  }
  .movies__grid {
    height: 100%;
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    padding-bottom: 10px;
    column-gap: 10px;
    row-gap: 20px;
    overflow-y: scroll;
    justify-items: center;
    .movie__container {
      width: 300px;
      cursor: pointer;
      transition: .2s ease-in-out;
      &:hover {
        .movie {
          &__poster {
            transition: .2s ease-in-out;
            filter: brightness(1.5);
          }
          &__title {

          }
        }
        // background-color: rgba(white,.5);
        transform: scale(1.01);
      }
      .movie {
        &__poster {
          width: 300px;
          height: 450px;
        }
        &__title {
          text-align: center;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>