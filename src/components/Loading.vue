<template>
  <div class="loading__container">
    <div class="loading--cycle">
    </div>
  </div>
</template>


<style lang="scss" scoped>
.loading__container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .loading--cycle {
    width: 50px;
    height: 50px;
    border: 5px solid black;
    border-radius: 50%;
    border-top-color: $color-font;
    animation: spin 0.8s infinite ease-in-out;
  }
}
@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
</style>