<template lang="pug">
  footer
    .footer__top
      img.footer__top__logo(src="/image/logo_white.svg")
      ul.footer__top__list
        li.footer__top__list__item
          nuxt-link(to="/") Home
        li.footer__top__list__item
          nuxt-link(to="/about") About
        li.footer__top__list__item
          nuxt-link(to="/shops") Shop
    .footer__bottom
      p Copyright © 2019 group-A. All Rights Reserved.
</template>

<script>
  import {TweenMax} from 'gsap'

  export default {
    mounted:()=>{
    }
  }
</script>

<style lang="scss" scoped>
  footer{
    background: $primary_daken;
    padding: 11rem;
  }
  .footer__top{
    @include full_size;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 3rem;
    border-bottom: 1px solid $bg_white;
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

      }
    }
  }
  .footer__bottom{
    padding-top: 3rem;
    p{
      text-align: right;
      font-size: 1Arem;
    }
  }

</style>

<style lang="scss" scoped>
  @include mq(sm){
    footer{
      background: $primary_daken;
      padding: 1rem;
    }
    .footer__top{
      @include full_size;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-bottom: 1rem;
      &__logo{
        height: 2rem;
        width: auto;
      }
      &__list{
        display: none;
      }
    }
    .footer__bottom{
      padding-top: 1rem;
      p{
        text-align: right;
        font-size: 0.7rem;
      }
    }
  }
</style>
