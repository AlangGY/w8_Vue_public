<template>
  <div
    ref="detectTarget"
    class="movies__loader">
    <Loading   
      :size="30" />
  </div>
</template>

<script>
import Loading from '~/components/Loading';

export default {
  components : { Loading },
  props : {
    isLoading : {
      type : Boolean,
      default : false
    }
  },
  emits : ['touched'],
  computed : {
    movieLoader(){
      return new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting){
            this.$emit('touched');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold : 0 });
    }
  },
  watch : {
    async isLoading(newValue){
      if(!newValue){
        this.movieLoader.observe(this.$refs.detectTarget);
      }
    }
  },
  mounted(){
    this.movieLoader.observe(this.$refs.detectTarget);
  }
};
</script>

<style lang="scss" scoped>
.movies__loader {
  width: 100%;
  height: 100%;
}
</style>