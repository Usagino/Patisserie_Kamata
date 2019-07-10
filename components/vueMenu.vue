<template lang="pug">
  .menu
    .menu__wrap
      .menu__button
        .menu__button__wrap
          menu_icon
      img.menu__logo(src="/image/logo.svg")
</template>

<script>
import menu_icon from '@/components/lottie_menu'
export default {
  components:{
    menu_icon
  }
}
</script>

<style lang="scss" scoped>
  .menu{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 8rem;
    background: $bg_white;
    &__logo{
      @include absolute_middle;

      transform: rotate(-90deg);
    }
    &__button{
      &__wrap{
        padding: 3rem;
      }
    }
  }
</style>
