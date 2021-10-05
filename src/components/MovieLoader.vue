<template>
  <div
    class="movies__loader">
    <div
      v-if="showTarget"
      ref="detectTarget"
      class="target"></div>
    <Loading
      v-else
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
  data(){
    return { showTarget : false };
  },
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
      if (newValue){
        this.showTarget = false;
      }
      else {
        this.updateShowTargetSlowly(true);
      }
    },
    showTarget(newValue){
      if (newValue) {
        this.$nextTick(() => {
          this.movieLoader.observe(this.$refs.detectTarget);
        });
      }
    }
  },
  mounted(){
    this.updateShowTargetSlowly(true);
    
  },
  methods : {
    updateShowTargetSlowly(bool){
      setTimeout(() => { 
        this.showTarget = bool; 
      }, 1000);
    }
  }
};

</script>

<style lang="scss" scoped>
.movies__loader {
  width: 100%;
  height: 100%;
  .target {
    height: 5px;
    width: 100%;
  }
}
</style>