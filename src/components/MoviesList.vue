<template>
  <ul
    class="movies__grid">
    <li
      v-for="movie in movies"
      :key="movie.imdbID"
      class="movie__container"
      @click="$emit('movie-clicked',movie.imdbID)">
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
  emits : ['movie-clicked']
};
</script>

<style lang="scss" scoped>
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
</style>