<template>
  <section>
    <!-- <h1>Home!</h1> -->
    <div class="logo--image">
    </div>
    <div class="search-bar__container">
      <SearchBar />
    </div>
  </section>
</template>

<script>
import SearchBar from '~/components/SearchBar';
export default { components : { SearchBar } };

</script>

<style lang="scss" scoped>
section {
  width: 100%;

  h1 {
    font-size: 50px;
    margin-top: 200px;
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