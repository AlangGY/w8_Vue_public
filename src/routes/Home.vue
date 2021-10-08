<template>
  <section>
    <!-- <h1>Home!</h1> -->
    <div class="logo--image">
    </div>
    <div class="search-bar__container">
      <SearchBar />
    </div>
    <h2> 영문 검색만 가능합니다 </h2>
  </section>
</template>

<script>
import SearchBar from '~/components/SearchBar';
export default { components : { SearchBar } };

</script>

<style lang="scss" scoped>
section {
  width: 100%;

  h2 {
    font-size: 30px;
    margin-top: 100x;
    text-align: center;
  }
  .logo--image {
    width: 235px;
    height: 275px;
    background-size: cover;
    margin: 0 auto;
    background-image: url('/static/logo-main.png');
  }
  .search-bar__container {
    width: 80%;
    margin: 0 auto;
  }
}
</style>