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
      @movie-clicked="changeQueryId">
      <MovieLoader
        v-if="movies.length < moviesTotalCount"
        :activate-loader="!isLoading"
        @touched="searchMovies" />
    </MoviesList>
    <MovieViewer
      v-if="isMovieSelected"
      :load-failed="detailLoadFailed"
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
      isMovieSelected : false,
      detailLoadFailed : false
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
    $route(newValue, oldValue) {
      if (newValue.name ==='Search') {
        if (newValue.params?.keyword !== oldValue.params?.keyword) {
          this.initialize();
        }
        newValue.query.id ? this.getMovieById(newValue.query.id) : this.closeViewer();
      }
    }
  },
  created() {
    this.initialize();
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
    changeQueryId(id){
      this.$router.push({ name : 'Search', query : { id } });
    },
    async getMovieById(id){
      this.isMovieSelected = true;
      const movie = await this.$store.dispatch('moviesStore/getMovieById', { id, plot : 'full' });
      if(movie && this.isMovieSelected){
        this.selectedMovie = movie;
      }
      else {
        this.detailLoadFailed = true;
        setTimeout(() => this.closeViewer(), 2000);
      }
    },
    initialize(){
      this.$store.commit('moviesStore/assignState', { movies : [], moviesTotalCount : 0 });
      this.page = 1;
      this.isfirstLoading = true;
      this.searchMovies();
      if( this.$route.query.id ) this.getMovieById(this.$route.query.id);

    },
    closeViewer(){
      this.$router.push({ name : 'Search' });
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
  height: 100%;
  width: 100%;
  .search__keyword {
    font-size: 32px;
    font-weight: 700;
    padding-bottom: 5px;
    margin-bottom: 20px;
    border-bottom : 2px solid color.adjust($color-border, $lightness : 30%);
  }
}
</style>