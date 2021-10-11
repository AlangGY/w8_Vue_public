<template>
  <ul
    class="movies__grid"
    dir="ltr">
    <li
      v-for="(movie,idx) in movies"
      :key="movie.imdbID"
      class="movie__container"
      :style="{animationDelay : `${(idx % moviesPerPage) * 0.1}s`}"
      @click="$emit('movie-clicked',movie.imdbID)">
      <div class="movie__poster__container">
        <img
          :ref="`${movie.imdbID}Image`"
          :src="movie.Poster"
          :alt="movie.Title"
          class="movie__poster--image"
          @error="$refs[`${movie.imdbID}Image`]
            .src='https://via.placeholder.com/300x450.png?text=No+Image'">
      </div>
      <div class="movie__title">
        {{ movie.Title }}
      </div>
    </li>
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props : {
    movies : {
      type : Array,
      default : () => []
    }
  },
  emits : ['movie-clicked'],
  data() {
    return { moviesPerPage : 10 };
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/_keyframes';

.movies__grid {
  height: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit,300px);
  grid-auto-rows: 480px;
  padding : 20px 0;
  column-gap: 10px;
  row-gap: 20px;
  overflow-y: scroll;
  justify-items: center;
  scroll-snap-type: y proximity;
  .movie__container {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: .2s ease-in-out;
    opacity: 0;
    animation: show .8s forwards;
    &:hover {
      .movie {
        &__poster__container {
          transform: scale(1.01);
          transition: .2s ease-in-out;
          filter: brightness(1.1);
          transform : translateY(-10px);
          box-shadow: 0 2px 4px 0px $color-black;
        }
      }
    }
    .movie {
      &__poster__container {
        width: 300px;
        height: 450px;
        background-color: rgba(color.adjust($color-background, $lightness : 20%),.4);
        box-shadow: 0 0 4px 0px $color-black;
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
/* @media screen and (min-width: 1899px) {
  .movie__container:nth-child(6n+1) {
    scroll-snap-align: center;
  }
}
@media screen and (min-width: 1587px) and (max-width : 1899px) {
  .movie__container:nth-child(5n+1) {
    scroll-snap-align: center;
  }
}
@media screen and (min-width: 1278px) and (max-width: 1587px) {
  .movie__container:nth-child(4n+1) {
    scroll-snap-align: center;
  }
}
@media screen and (min-width: 967px) and (max-width:1277px) {
  .movie__container:nth-child(3n+1) {
    scroll-snap-align: center;
  }
}
@media screen and (min-width: 658px) and (max-width:967px) {
  .movie__container:nth-child(2n+1) {
    scroll-snap-align: center;
  }
}
@media screen and (max-width: 657px ) {
  .movie__container {
    scroll-snap-align: center;
  }
} */
</style>