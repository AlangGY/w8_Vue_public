<template>
  <div class="loading__container">
    <div
      :style="{ width: `${size}px`, height: `${size}px`}"
      class="loading--cycle">
    </div>
  </div>
</template>

<script>
export default {
  props : {
    size : {
      type : Number,
      default : 50
    }
  }
};
</script>


<style lang="scss" scoped>
.loading__container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .loading--cycle {
    border: 5px solid black;
    border-radius: 50%;
    border-top-color: $color-white;
    animation: spin 0.5s infinite ease-in;
  }
}
@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
</style>