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
    <ul
      v-else
      class="movies__grid">
      <li
        v-for="movie in movies"
        :key="movie.imdbID"
        class="movie__container"
        @click="getMovieById(movie.imdbID)">
        <div class="movie__poster--container">
          <img
            :ref="`${movie.imdbID}Image`"
            :src="movie.Poster"
            :alt="movie.Title"
            class="movie__poster--image"
            @error="$refs[`${movie.imdbID}Image`].style.display='none'">
        </div>
        <div class="movie__title">
          {{ movie.Title }}
        </div>
      </li>
      <div
        class="movies__loader--container">
        <MovieLoader
          v-if="0 < movies.length < moviesTotalCount"
          :is-loading="isLoading"
          @touched="searchMovies" />
      </div>
    </ul>
    <MovieViewer
      v-if="isMovieSelected"
      :selected-movie="selectedMovie"
      @close-viewer="closeViewer" />
  </section>
</template>

<script>
import MovieViewer from '~/components/MovieViewer';
import MovieLoader from '~/components/MovieLoader';
import Loading from '~/components/Loading';

export default {
  components : { MovieViewer, MovieLoader, Loading },
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
      return this.$store.state.movies;
    },
    moviesTotalCount(){
      return this.$store.state.moviesTotalCount;
    },
    params(){
      return { searchingBy : this.searchingBy, page : this.page };
    }
    
  },
  watch : {
    $route() {
      this.initialize();
      this.searchMovies();
    }
  },
  created() {
    this.searchMovies();
  },
  methods : {
    async searchMovies(){
      if(!this.isLoading){
        this.isLoading = true;
        console.log('get movies!');
        await this.$store.dispatch('searchMovies', this.params);
        this.$nextTick(() => {
          this.isLoading = false;
          this.page++;
        });
      }
      if (this.isfirstLoading) this.isfirstLoading = false;
    },
    async getMovieById(id){
      this.isMovieSelected = true;
      const movie = await this.$store.dispatch('getMovieById', { id, plot : 'full' });
      if(movie && this.isMovieSelected){
        this.selectedMovie = movie;
      }
    },
    initialize(){
      this.$store.commit('assignState', { movies : [], moviesTotalCount : 0 });
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
@media screen {
  
}
.search__inner {
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
  height: calc(100% - $height-nav);
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
    .movies__loader--container {
      grid-column: 1 / -1;
      height: 50px;
      width: 100%;
    }
  }
}
</style>