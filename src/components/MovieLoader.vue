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
    activateLoader : {
      type : Boolean,
      default : false
    }
  },
  emits : ['touched'],
  data() {
    return {
      movieLoader : new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting){
            this.$emit('touched');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold : 0 })
    };
  },
  watch : {
    activateLoader(newValue){
      if(newValue){
        this.movieLoader.observe(this.$refs.detectTarget);
      }
    }
  },
  mounted(){
    if(this.activateLoader){
      this.movieLoader.observe(this.$refs.detectTarget);
    }
  }
};
</script>

<style lang="scss" scoped>
.movies__loader {
  width: 100%;
  height: 100%;
}
</style>