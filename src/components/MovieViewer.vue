<template>
  <div
    class="movie-viewer__container"
    @click="closeViewer">
    <div
      ref="movieViewer"
      :style="{'background-image' : `url(${biggerImageUrl})`}"
      class="movie-viewer__inner"
      @click.stop>
      <div class="button__inner">
        <Button
          v-bind="{
            width:50,
            height:50,
            backgroundColor:'rgba(0,0,0,.3)',
            color: 'white'
          }"
          @click="closeViewer">
          x
        </Button>
      </div>
      <div
        v-if="isLoading"
        class="loading__inner">
        <Loading />
      </div>
      <div
        v-else-if="loadFailed"
        class="load--failed">
        해당하는 영화정보가 없습니다.
      </div>
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
                @error="$refs.poster.src='https://via.placeholder.com/300x450.png?text=No+Image'">
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
import Button from '~/components/Button';

export default {
  components : { Loading, Button },
  props : {
    selectedMovie : {
      type : Object,
      default : () => ({})
    },
    loadFailed : {
      type : Boolean,
      default : false
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
    },
    loadFailed(){
      this.isLoading = false;
    }
  },
  mounted(){
    window.addEventListener('keyup', this.handleKeyUp);
  },
  unmounted(){
    window.removeEventListener('keyup', this.handleKeyUp);
  },
  methods : {
    closeViewer(){
      this.$emit('close-viewer');
    },
    handleKeyUp({ key }){
      if(key === 'Escape') {
        this.closeViewer();
      }
    }
  }
};

</script>


<style lang="scss" scoped>
@import '~/scss/_keyframes.scss';
.movie-viewer__container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba($color-black, .7);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  color: $color-white;

  .movie-viewer__inner {
    width: 85%;
    height: 90%;
    background-color: rgba($color-black,.8);
    background-size: cover;
    background-blend-mode: darken;
    display: flex;
    border-radius: 10px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4.1px;
    padding: 20px;
    position: relative;
    overflow-y: scroll;
    align-items: center;
    animation: enlarge 0.2s ease-out forwards;

    * {
      box-sizing: border-box;
    }
    & > * {
      opacity: 0;
      animation: show 0.8s ease-out forwards;
    }
    .button__inner {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
    }
    .loading__inner {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
    .inner {
      &__left, &__right {
        display: flex;
        flex-direction: column;
        align-items: center;

      }
      &__left {
        flex-shrink: 0;
        .movie {
          &__poster {
            border-radius: 5px;
            box-shadow: 0 0 20px -5px rgba(color.adjust($color-black, $lightness : 50%),.8);
            background-color: rgba($color-background,.7);
            img {
              height: 100%;
              width: 100%;
              border-radius: 5px;
            }
          }
          &__ratings {
            font-size: 16px;

          }
        }
      }
      &__right {
        flex-grow: 1;
        padding-bottom: 20px;
        .movie {
          &__title {
            font-size: 50px;
            font-weight: bold;
            margin-bottom: 30px;
            text-align: center;
          }
          &__director, &__actors {
            align-self: flex-start;
            margin-left: 30px;

          }
          &__plot {
            margin-top: 30px;
          }
          &__plot--content {
            margin-top: 10px;
            line-height: 2;
            flex-grow: 1;
            overflow-y: auto;
            padding: 10px;
            background-color: rgba($color-black,.4);
            box-shadow: 0 0 4px 0px color.adjust($color-black, $lightness: 10%);
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

.load--failed {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 42px;
}

@media screen and (min-width : 1301px ) {
  .movie-viewer__container {
    .movie-viewer__inner {
      .inner {
        &__left, &__right {
          height: 100%;

        }
        &__left {
          width: 550px;
          .movie__poster {
            height: 600px;
          }
        }
      }
    }
  }
}

@media screen and (max-width : 1300px ) {
.movie-viewer__container {
  .movie-viewer__inner {
    flex-direction: column;
    .inner {
      &__right {
        height: 100%;
        .movie__plot--content {
          width: 90%;
          font-size: 24px;
        }  
      }
      &__left {
        .movie__poster {
          width: 500px;
          height: 740px;
        }
      }
    }
  }
  }
}

@media screen and (max-width : 650px) {
  .movie-viewer__container {
    .movie-viewer__inner {
      flex-direction: column;
      .inner {
        &__left {
          .movie__poster {
           width: 300px;
           height: 444px;
          }
        }
        &__right {
          .movie__plot--content {
            width: 100%;
            font-size: 20px;
          }  
        }
      }
    }
  }
}


</style>