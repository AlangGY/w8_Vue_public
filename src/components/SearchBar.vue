<template>
  <form @submit.prevent="searchBy">
    <div class="input__container">
      <span class="material-icons">
        search
      </span>
      <input
        ref="input"
        type="text"
        placeholder="영화명을 입력하세요">
    </div>
  </form>
</template>

<script>
export default {
  methods : {
    searchBy(){
      if (this.$refs.input.value){
        this.$store.commit('moviesStore/assignState', { searchingBy : this.$refs.input.value });
        this.$router.push(`/search/${this.$refs.input.value}`);
        this.$refs.input.value = '';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  display: flex;
  justify-content: center;
  .input__container {
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: center;
    transition: 0.2s ease-in-out;
    position: relative;
    &:focus-within {
      width: 100%;
    }
    .material-icons {
      position: absolute;
      color: $color-black;
      font-size: 40px;
      top: calc(50% - 20px);
      right: 0;
      opacity: .7;
      z-index: 0;
    }
    input {
      width: 100%;
      height: 50px;
      // background-color: color.adjust($color-background, $lightness: 10%);
      border: 3px solid $color-black;
      box-shadow: 0 0 6px -1px $color-black;
      border-radius: 5px;
      color: $color-font;
      font-size: 30px;
      text-align: center;
      transition: 0.2s ease-in-out;
      &::placeholder {
        font-size: 20px;
      }
      &:focus {
        outline: none;
        color: color.adjust($color-background, $blackness: 80%);
        background-color: color.adjust($color-background, $lightness: 80%);
        box-shadow: 0 0 5px 0 color.adjust($color-background, $lightness: 50%);
      }
    }
  }
}
</style>