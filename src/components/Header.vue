<template>
  <header>
    <div class="header__inner">
      <router-link to="/">
        <div class="header__logo--container">
          <div class="logo__img"></div>
          <div class="logo__img2"></div>
        </div>
      </router-link>
      <div
        v-if="$route.name ==='Search'"
        class="header__search-bar--container">
        <SearchBar />
      </div>
    </div>
  </header>
</template>

<script>
import SearchBar from '~/components/SearchBar';

export default { components : { SearchBar } };
</script>

<style lang="scss" scoped>
@import '~/scss/_keyframes.scss';


@media screen and (max-width : 960px) {
    .header__inner {
      .header__logo--container {
        .logo__title {
          display: none;
        }
    }
  }
}

header {
  width: 100%;
  height: $height-header;
  position: sticky;
  top: 0;
  background-color: $color-white;
  box-shadow: 0 0 5px 0 color.adjust($color-border, $lightness : -10%);
  .header__inner {
    height: 100%;
    display: flex;
    align-items: center;
    column-gap: 15px;
    position: relative;
    .header {
      &__logo--container {
        display: flex;
        align-items: center;
        margin-left: 10px;
        &:hover {
          opacity: 0.8;
          .logo__img {
            transform: translateY(-3px) rotate(-1deg);
          }
          .logo__img2 {
            transform: translateY(-5px) rotate(1deg);
          }
        }
        .logo {
          &__img {
            background-size: cover;
            transition: transform 0.1s ease-in-out;
          }
          &__img2 {
            width: calc(450px / 4);
            height: calc(156px / 4);
            background-image: url("/static/logo-header_2.png");
            background-size: cover;
            margin-right: 10px;
            transition: transform 0.1s ease-in-out;

          }
        }
      }
      &__search-bar--container {
        width: 60%;
        height: 50px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;

      }
    }
  }
}
@media screen and (min-width: 701px) {
  .logo__img {
    width: calc(450px / 4);
    height: calc(156px / 4);
    background-image: url("/static/logo-header.png");
  }
}
@media screen and (max-width: 700px) {
  .logo__img {
    width: calc(235px / 4);
    height: calc(275px / 4);
    background-image: url("/static/logo-main.png");
  }
  .logo__img2 {
    display: none;
  }
  
}


</style>
