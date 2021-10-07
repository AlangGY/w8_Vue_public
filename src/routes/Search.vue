<template>
  <section class="search__inner">
    <div class="search__keyword">
      {{ searchingBy }}
    </div>
    <Loading v-if="isfirstLoading" />
    <div
      v-else-if="searchingBy && movies.length === 0"
      class="search__error">
      No Result!
    </div>
    <MoviesList
      v-else
      :movies="movies"
      @movie-clicked="getMovieById">
      <MovieLoader
        v-if="movies.length < moviesTotalCount"
        :is-loading="isLoading"
        @touched="searchMovies" />
    </MoviesList>
    <MovieViewer
      v-if="isMovieSelected"
      :selected-movie="selectedMovie"
      @close-viewer="closeViewer" />
  </section>
</template>

<script>
import MoviesList from '~/components/MoviesList';
import MovieViewer from '~/components/MovieViewer';
import MovieLoader from '~/components/MovieLoader';
import Loading from '~/components/Loading';

export default {
  components : { MoviesList, MovieViewer, MovieLoader, Loading },
  data(){
    return { 
      page : 1,
      selectedMovie : {},
      isfirstLoading : true,
      isLoading : false,
      isMovieSelected : false

    };
  },
  computed : {
    searchingBy(){
      return this.$route.params.keyword;
    },
    movies(){
      return this.$store.state.moviesStore.movies;
    },
    moviesTotalCount(){
      return this.$store.state.moviesStore.moviesTotalCount;
    },
    searchQueries(){
      return { searchingBy : this.searchingBy, page : this.page };
    }
    
  },
  watch : {
    $route(newValue) {
      if (newValue.name ==='Search') {
        this.initialize();
        this.searchMovies();
      }
    }
  },
  created() {
    this.initialize();
    this.searchMovies();
  },
  methods : {
    async searchMovies(){
      if(!this.isLoading){
        this.isLoading = true;
        await this.$store.dispatch('moviesStore/searchMovies', this.searchQueries);
        this.isLoading = false;
        this.page++;
      }
      if (this.isfirstLoading) this.isfirstLoading = false;
    },
    async getMovieById(id){
      this.isMovieSelected = true;
      const movie = await this.$store.dispatch('moviesStore/getMovieById', { id, plot : 'full' });
      if(movie && this.isMovieSelected){
        this.selectedMovie = movie;
      }
    },
    initialize(){
      this.$store.commit('moviesStore/assignState', { movies : [], moviesTotalCount : 0 });
      this.page = 1;
      this.isfirstLoading = true;

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
  padding: 20px;
  overflow-y: auto;
  height: calc(100% - $height-header);
  width: 100%;
  position: absolute;
  .search__keyword {
    font-size: 32px;
    font-weight: 700;
    // text-align: end;
    // padding-left: 50px;
    // width: 500px;
    padding-bottom: 5px;
    margin-bottom: 20px;
    // border-bottom: 1px solid $color-border;
    box-shadow: 0 5px 3px -3px color.adjust($color-border, $lightness : 10%);
  }
  .movies__grid::-webkit-scrollbar {
    width: 8px;
    border-radius: 5px;
    background-color: rgba(#aaa,.2);
    &-thumb {
      border-radius: 5px;
      background:color.adjust($color-border, $lightness: -70%);
    }
  }
  .movies__grid {
    height: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit,300px);
    padding : 10px 0;
    column-gap: 10px;
    row-gap: 20px;
    overflow-y: scroll;
    justify-items: center;
    .movie__container {
      width: 300px;
      height: 480px;
      cursor: pointer;
      transition: .2s ease-in-out;
      &:hover {
        transform: scale(1.01);
        .movie {
          &__poster {
            transition: .2s ease-in-out;
            filter: brightness(1.5);
          }
          &__title {

          }
        }
      }
      .movie {
        &__poster--container {
          width: 300px;
          height: 450px;
          background-color: rgba(color.adjust($color-background, $lightness : 20%),.4);
          border-radius: 5px;
          .movie__poster--image {
            width: 300px;
            height: 450px;
            border-radius: 5px;
          }
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