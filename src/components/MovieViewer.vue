<template>
  <div class="movie-viewer__container">
    <div class="movie-viewer__inner">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movie-viewer__container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(black,.4);
  // display: flex;
  display: none;
  justify-content: center;
  align-items: center;

  .movie-viewer__inner {
    width: 50%;
    height: 50%;
    background-color: white;
  }
}
</style>