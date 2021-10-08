<template>
  <div class="app__inner">
    <Header />
    <main class="app__page">
      <RouterView />
    </main>
  </div>
</template>

<script>
import Header from '~/components/Header';

export default { components : { Header } };
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  
}
*::-webkit-scrollbar {
    width: 8px;
    border-radius: 5px;
    background-color: rgba(rgb(218, 218, 218),.5);
    &-thumb {
      border-radius: 5px;
      background:color.adjust($color-border, $lightness: -70%);
    }
  }
body {
}
.app__inner {
  font-family: 'Noto Sans KR', sans-serif;
  background : $color-background--gradient;
  color : $color-font;
  height: 100vh;
  font-size: 18px;
  line-height: 1.4;
  

  .app__page {
    height: calc(100% - $height-header);
    overflow-y: hidden;
  }
}

</style>