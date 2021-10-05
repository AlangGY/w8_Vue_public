<template>
  <div
    class="movie-viewer__container"
    @click="closeViewer">
    <div
      ref="movieViewer"
      :style="{'background-image' : `url(${biggerImageUrl})`}"
      class="movie-viewer__inner"
      @click.stop>
      <Loading v-if="isLoading" />
      <template v-else>
        <div class="inner__left">
          <div class="inner__column">
            <div class="movie__released">
              {{ selectedMovie.Released }}
            </div>
            <div class="divider"></div>
            <div class="movie__runtime">
              {{ selectedMovie.Runtime }}
            </div>
          </div>
          <div class="inner__column">
            <div class="movie__poster">
              <img
                ref="poster"
                :src="biggerImageUrl"
                :alt="selectedMovie.Title"
                @error="$refs.poster.style.display = 'none'">
            </div>
          </div>
          <div class="inner__column">
            <ul class="movie__ratings">
              <li
                v-for="rating in selectedMovie.Ratings"
                :key="rating.Source">
                {{ rating.Source }}
                <div class="divider">
                  :
                </div>
                {{ rating.Value }}
              </li>
            </ul>
          </div>
        </div>
        <div class="inner__right">
          <div class="movie__title">
            {{ selectedMovie.Title }}
          </div>
          <div class="movie__director">
            감독 : {{ selectedMovie.Director }}
          </div>
          <div class="movie__actors">
            출연 : {{ selectedMovie.Actors }}
          </div>
          <div class="movie__plot">
            줄거리
          </div>
          <div class="movie__plot--content">
            {{ selectedMovie.Plot }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Loading from '~/components/Loading';
export default {
  components : { Loading },
  props : {
    selectedMovie : {
      type : Object,
      default : () => ({})
    }
  },
  emits : ['close-viewer'],
  data(){
    return { isLoading : true };
  },
  computed : {
    biggerImageUrl(){
      const originalImageUrl = this.selectedMovie?.Poster;
      if (originalImageUrl){
        const [ name] = originalImageUrl.split('.jpg');
        const newName = name.slice(0, -3);
        return `${newName}500.jpg`;
      }
      return '';
    }
  },
  watch : {
    selectedMovie(){
      this.isLoading = false;
    }
  },
  methods : {
    closeViewer(){
      this.$emit('close-viewer');
    }
  }
};
</script>

<style lang="scss" scoped>
.movie-viewer__container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba($color-background, .7);
  display: flex;
  justify-content: center;
  align-items: center;

  .movie-viewer__inner {
    width: 80%;
    height: 90%;
    background-color: rgba(color.adjust($color-background, $lightness : -30%),.8);
    background-size: cover;
    background-blend-mode: darken;
    display: grid;
    grid-template-columns: 550px 1fr;
    border-radius: 10px;
    padding: 20px;
    position: relative;
    * {
      box-sizing: border-box;
    }
    .inner {
      &__left, &__right {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        overflow-y: scroll;

      }
      &__left {
        .movie {
          &__poster {
            height: 750px;
            width: 500px;
            border-radius: 5px;
            box-shadow: 0 0 20px -5px rgba(color.adjust($color-background, $lightness : 30%),.8);
            background-color: rgba($color-background,.7);
            img {
              width: 500px;
              height: 750px;
              border-radius: 5px;
            }
          }
          &__ratings {
            font-size: 16px;

          }
        }
      }
      &__right {
        padding-bottom: 20px;
        .movie {
          &__title {
            font-size: 50px;
            font-weight: bold;
            margin-bottom: 30px
          }
          &__director, &__actors {
            align-self: flex-start;

          }
          &__plot {
            margin-top: 30px;
            font-size: 32px;
          }
          &__plot--content {
            margin-top: 10px;
            width: 90%;
            line-height: 2;
            flex-grow: 1;
            overflow-y: auto;
            padding: 10px;
            background-color: rgba($color-background,.4);
            box-shadow: 0 0 4px 0px color.adjust($color-background, $lightness: 10%);
            border-radius: 5px;
            z-index: 1;
          }
        }
      }
      &__column {
        display: flex;
        align-items: center;
        padding: 5px;

      }
    }
  }
}

.divider {
  margin: 0 10px;
  display: inline-block;
}
</style>