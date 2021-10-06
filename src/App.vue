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
  // background-color: $color-background;
}
.app__inner {
  background : $color-background--gradient;
  // background-color: $color-background;
  font-family: 'Noto Sans KR', sans-serif;
  color : $color-font;
  height: calc(100vh - $height-header);
  font-size: 18px;
  line-height: 1.4;
  

  .app__page {
    height: 100%;
    margin-top: $height-header;
    overflow-y: hidden;
  }
}

</style>