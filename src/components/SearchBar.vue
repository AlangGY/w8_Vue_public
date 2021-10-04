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