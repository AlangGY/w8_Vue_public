<template>
  <form @submit.prevent="searchBy">
    <input
      ref="input"
      :value="searchingBy"
      type="text"
      @input="input">
  </form>
</template>

<script>
export default {
  computed : {
    searchingBy(){
      return this.$store.state.searchingBy;
    }
  },
  methods : {
    input(){
      this.$store.commit('assignState', { searchingBy : this.$refs.input.value });
    },
    searchBy(){
      this.$router.push(`/search/${this.searchingBy}`);
      this.$refs.input.value = '';
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  input {
    width: 50%;
    height: 100%;
    background-color: color.adjust($color-background, $lightness: 10%);
    border: none;
    border-radius: 5px;
    color: $color-font;
    font-size: 30px;
    text-align: center;
    transition: 0.2s ease-in-out;
    &:focus {
      outline: none;
      width: 100%;
      color: color.adjust($color-background, $blackness: 80%);
      background-color: color.adjust($color-background, $lightness: 80%);
      box-shadow: 0 0 5px 0 color.adjust($color-background, $lightness: 50%);
    }
  }
}
</style>