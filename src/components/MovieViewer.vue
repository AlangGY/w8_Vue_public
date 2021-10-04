<template>
  <div
    class="movie-viewer__container"
    @click="closeViewer">
    <div
      ref="movieViewer"
      class="movie-viewer__inner"
      @click.stop>
      {{ selectedMovie.title }}
    </div>
  </div>
</template>

<script>
export default {
  props : {
    selectedMovie : {
      type : Object,
      default : () => ({})
    }
  },
  emits : ['close-viewer'],
  watch : {
    selectedMovie(newValue){
      console.log(newValue);
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
  background-color: rgba(black,.4);
  display: flex;
  justify-content: center;
  align-items: center;

  .movie-viewer__inner {
    width: 50%;
    height: 50%;
    background-color: white;
  }
}
</style>