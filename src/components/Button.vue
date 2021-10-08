<template>
  <button
    :style="style"
    @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props : {
    width : {
      type : Number,
      default : 100
    },
    height : {
      type : Number,
      default : 50
    },
    backgroundColor : {
      type : String,
      default : 'rgba(0,0,0,0.3)'
    },
    color : {
      type : String,
      default : 'white'
    }
  },
  computed : {
    style(){
      return {
        width : this.width + 'px',
        height : this.height + 'px',
        backgroundColor : this.backgroundColor,
        color : this.color
      };
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  border : none;
  border-radius : 5px;
  font-size : 20px;
  font-weight: 700;
  cursor: pointer;
  opacity : 0.8;
  &:hover {
    opacity : 1;
  }
}
</style>