<template lang="pug">
  footer
    .footer__wrap
      img.footer__wrap__logo(src="/image/logo.svg")
      ul.footer__wrap__list
        li.footer__wrap__list__item
          nuxt-link(to="/aa") Home
        li.footer__wrap__list__item
          nuxt-link(to="/aa") About
        li.footer__wrap__list__item
          nuxt-link(to="/aa") Shop
        li.footer__wrap__list__item
          nuxt-link(to="/aa") Feature
</template>

<script>
  import {TweenMax} from 'gsap'

  export default {
    mounted:()=>{
    }
  }
</script>

<style lang="scss" scoped>
  .footer__wrap{
    @include full_size;
    background: #E2B8B8;
    padding: 11rem;
    &__logo{
      height: 3rem;
      width: auto;

    }
    &__list{
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
      @include space_reset

      &__item{
        padding-top: 2rem;
        margin-left: 5rem;
        a{
          color: $text_color;
        }
      }
    }
  }
  @include mq(sm) {
  }
</style>
