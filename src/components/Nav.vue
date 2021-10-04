<template>
  <nav>
    <div class="nav__inner">
      <div class="nav__logo--container">
        <div class="logo__img"></div>
        <div class="logo__title">
          Alang Movie
        </div>
      </div>
      <div class="nav__search-bar--container">
        <form>
          <input type="text">
        </form>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: $height-nav;
  position: fixed;
  top: 0;
  background-color: color.adjust($color-background,$lightness: -20%);
  .nav__inner {
    display: flex;
    align-items: center;
    column-gap: 15px;
    .nav {
      &__logo--container {
        .logo {
          &__img {

          }
          &__title {

          }
        }
      }
      &__search-bar--container {
        form {
          input {

          }
        }
      }
    }
  }
}
</style>
