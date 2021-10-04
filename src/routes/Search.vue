<template>
  <section class="search__inner">
    <h1> {{ searchingBy }} 검색 결과</h1>
    <ul class="movies__grid">
      <li
        v-for="movie in movies"
        :key="movie.imdbId"
        class="movie__container">
        <img
          :src="movie.Poster"
          :alt="movie.Title"
          class="movie__poster">
        Title :  {{ movie.Title }} , Type : {{ movie.Type }} , Year : {{ movie.Year }}
      </li>
    </ul>
    <MovieViewer />
  </section>
</template>

<script>
import MovieViewer from '~/components/MovieViewer';

export default {
  components : { MovieViewer },
  data(){
    return { page : 1 };
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
      this.$store.dispatch('searchMovie', this.params);
    }
  },
  created() {
    this.$store.dispatch('searchMovie', this.params);
  }
};
</script>

<style lang="scss" scoped>
.search__inner {
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
  height: 100%;
  h1 {

  }
  .movies__grid {
    height: 100%;
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    padding: 10px;
    gap: 10px;
    overflow-y: scroll;
    .movie__container {
      background-color: royalblue;
      width: 300px;
    }
  }
}
</style>