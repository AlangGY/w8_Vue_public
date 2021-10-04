<template>
  <section class="search__inner">
    <h1> ... 검색 결과</h1>
    <div class="movies__grid">
      <div class="movie__container"></div>
      <div class="movie__container"></div>
      <div class="movie__container"></div>
      <div class="movie__container"></div>
      <div class="movie__container"></div>
      <div class="movie__container"></div>
      <div class="movie__container"></div>
      <div class="movie__container"></div>
      <div class="movie__container"></div>
      <div class="movie__container"></div>
      <div class="movie__container"></div>
      <div class="movie__container"></div>
      <div class="movie__container"></div>
    </div>
    <MovieViewer />
  </section>
</template>

<script>
import MovieViewer from '~/components/MovieViewer';

export default { components : { MovieViewer } };
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
    grid-template-columns: repeat(4,1fr);
    grid-auto-rows: 300px;
    padding: 10px;
    gap: 10px;
    overflow-y: scroll;
    background-color: burlywood;
    .movie__container {
      background-color: royalblue;
    }
  }
}
</style>