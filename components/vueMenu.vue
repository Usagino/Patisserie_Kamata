<template lang="pug">
  .menu
    .menu__wrap
      .menu__button
        .menu__button__wrap
          menu_icon
        p menu
      img.menu__logo(src="/image/logo_vertical.svg")
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
    width: 4rem;
    background: $bg_white;
    z-index: 20;
    &__logo{
      @include absolute_middle;
      width: 2rem;
      height: auto;
    }
    &__button{
      padding:1rem;
      font-size: 0.5rem;
      &__wrap{

      }
    }
  }
</style>
