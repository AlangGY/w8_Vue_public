<template>
  <nav>
    <div class="nav__inner">
      <div class="nav__logo--container">
        <div class="logo__img"></div>
        <router-link
          class="logo__title"
          to="/">
          Alang Movie
        </router-link>
      </div>
      <div class="nav__search-bar--container">
        <SearchBar />
      </div>
    </div>
  </nav>
</template>

<script>
import SearchBar from '~/components/SearchBar';

export default { components : { SearchBar } };
</script>

<style lang="scss" scoped>


@media screen and (max-width : 960px) {
    .nav__inner {
      .nav__logo--container {
        .logo__title {
          display: none;
        }
    }
  }
}

nav {
  width: 100%;
  height: $height-nav;
  position: fixed;
  top: 0;
  background-color: $color-nav;
  // border-bottom: 1px solid $color-border;
  box-shadow: 0 0 5px 0 color.adjust($color-border, $lightness : -10%);
  .nav__inner {
    height: 100%;
    display: flex;
    align-items: center;
    column-gap: 15px;
    position: relative;
    .nav {
      &__logo--container {
        display: flex;
        align-items: center;
        margin-left: 10px;
        .logo {
          &__img {
            width: 40px;
            height: 40px;
            background-image: url("https://ca.slack-edge.com/T024MG1J97Z-U0295HH23AB-51cc069ef6d8-72");
            background-size: cover;
            margin-right: 10px;
          }
          &__title {
            font-size: 32px;
            text-decoration: none;
            color: $color-font;
            opacity: 0;
            animation: show 1s ease-in-out forwards;
            &:hover {
              opacity: .7;
            }
          }
        }
      }
      &__search-bar--container {
        width: 500px;
        height: 50px;
        top: calc(50% - 25px);
        left: calc(50% - 250px);
        position: absolute;

      }
    }
  }
}
@keyframes show {
  to {
    opacity: 1;
  }
}
</style>
