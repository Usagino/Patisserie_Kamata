<template lang="pug">
  .menu
    .menu-bar
      .menu-bar__wrap
        .menu-bar__button
          .menu-bar__button__back
          .menu-bar__button__wrap#open
            menu_icon
        img.menu-bar__logo(src="/image/logo_vertical.svg")
    .menu-list
      .menu-list__wrap
        .menu-list__bar
          .menu-list__bar__button#close
            .menu-list__bar__back
            menu_close
          img.menu-list__bar__logo(src="/image/logo_vertical_white.svg")
        nav.menu-list__nav
          ul.menu-list__nav__list
            li.menu-list__nav__list__item
              nuxt-link(to="/aa") Home
            li.menu-list__nav__list__item
              nuxt-link(to="/aa") About
            li.menu-list__nav__list__item
              nuxt-link(to="/aa") Shop
            li.menu-list__nav__list__item
              nuxt-link(to="/aa") Feature
        img.menu-list__image(src="/image/menu_image.png")
</template>

<script>
import menu_icon from '@/components/lottie_menu'
import menu_close from '@/components/lottie_close'
import {TweenMax} from 'gsap'

export default {
  components:{
    menu_icon,
    menu_close
  },
  mounted:()=>{
    const open = document.querySelector('#open');
    const close = document.querySelector('#close');
    TweenMax.set('.menu-list',{
      opacity:0,
      display:'none'
    })
    open.onclick = () =>{
      TweenMax.to('.menu-list',0.5,{
        opacity:1,
        display:'block'
      })
    }
    close.onclick = () =>{
      TweenMax.to('.menu-list',0.5,{
        opacity:0,
        display:'none'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .menu-bar{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 5rem;
    background: $bg_white;
    z-index: 20;

    &__wrap{
      @include full_size;
      position: relative;
    }

    &__logo{
      @include absolute_middle;
      width: 2rem;
      height: auto;
    }

    &__button{
      cursor: pointer;
      position: absolute;
      height: 2rem; width: 2rem;
      top: 1.5rem;
      left: 0;right: 0;
      margin: auto;
      &:hover > &__back{
        opacity: 1;
        transform: scale(1.7);
      }
      &__back{
        transition: all .3s ease .2s;
        opacity: 0;
        position: absolute;
        height: 2rem; width: 2rem;
        top: 0;
        left: 0; right: 0;
        margin: auto;
        content: "";
        border-radius: 100%;
        border: 1px solid $primary_daken;
        transform: scale(0);
      }
    }
  }
  .menu-list{
    z-index: 30;
    display: none;

    position: fixed;
    top: 0;left: 0;
    background: $primary_daken;
    @include full_screen;
    &__wrap{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    }
    &__bar {
      width: 5rem;
      height: 100vh;
      position: relative;
      &__logo{
        @include absolute_middle;
        width: 2rem;
        height: auto;
      }
      &__button{
        @include absolute_middle;
        bottom: auto;
        top: 1.5rem;
        height: 2rem; width: 2rem;
        cursor: pointer;
        &:hover > .menu-list__bar__back{
          opacity: 1;
          transform: scale(1.7);
        }
      }
      &__back{
        transition: all .3s ease .1s;
        opacity: 0;
        position: absolute;
        height: 2rem; width: 2rem;
        top: 0;
        left: 0; right: 0;
        margin: auto;
        content: "";
        border-radius: 100%;
        border: 1px solid $bg_white;
        transform: scale(0);
      }
    }
    &__nav{
      width: calc(100vw - 40%);
      height: 100vh;
      &__list{
        @include full_size;
        @include middle;
        flex-direction: column;
        &__item{
          margin-top: 3rem;
        }
        &__item:first-child{
          margin-top: 0px;
        }
      }
    }
    &__image{
      width: calc(100vw - 60%);
      height: 100vh;
      object-fit: cover;
      background-position: center center;
    }
  }
  @include mq(sm) {
    .menu-bar{
      height: 5rem;
      &__wrap{
        @include full_size;
        position: relative;
        height: 5rem;
      }
      &__logo{
        display: none;
      }
    }

    .menu-list{
      z-index: 30;
      display: none;

      position: fixed;
      top: 0;left: 0;
      background: $primary_daken;
      @include full_screen;
      &__wrap{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
      }
      &__bar {
        width: 0rem;
        height: 100vh;
        position: relative;
        &__logo{
          display: none;
        }
        &__button{
          margin: 0;
          position: fixed;
          bottom: auto;
          top: 1.5rem;
          left: 1.5rem;
          height: 2rem; width: 2rem;
          cursor: pointer;
          &:hover > .menu-list__bar__back{
            opacity: 1;
            transform: scale(1.7);
          }
        }
        &__back{
          transition: all .3s ease .1s;
          opacity: 0;
          position: fixed;
          height: 2rem; width: 2rem;
          top: 0;
          left: 0; right: 0;
          margin: auto;
          content: "";
          border-radius: 100%;
          border: 1px solid $bg_white;
          transform: scale(0);
        }
      }
      &__nav{
        width: 100vw;
        height: 100vh;
        &__list{
          @include full_size;
          @include middle;
          flex-direction: column;
          &__item{
            margin-top: 3rem;
          }
          &__item:first-child{
            margin-top: 0px;
          }
        }
      }
      &__image{
        display: none;
      }
    }
  }
</style>
