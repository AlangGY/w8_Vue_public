<template>
  <div class="app__inner">
    <Nav />
    <main class="app__page">
      <RouterView />
    </main>
  </div>
</template>

<script>
import Nav from '~/components/Nav';

export default { components : { Nav } };
</script>

<style lang="scss" scoped>
.app__inner {
  font-family: 'Noto Sans KR', sans-serif;
  color : $color-font;
  height: calc(100vh - $height-nav);
  background-color: $color-background;
  * {
    box-sizing: border-box;
  }
  .app__page {
    height: 100%;
    margin-top: $height-nav;
    overflow-y: hidden;
  }
}

</style>