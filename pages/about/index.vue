<template lang="pug">
  section.container
    vue_menu
    .first
      img(src="/image/logo.svg")
    .movie
      .movie__bg
      .movie__wrap
        .movie__title
          h1.movie__title__text ABOUT
          span.movie__title__bar
        .movie__contents
          <iframe width="680" height="400" src="https://www.youtube.com/embed/vWaRiD5ym74" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        .movie__description
          .movie__description__text
            h1 「東京は蒲田にある素敵なケーキ屋さん」を紹介するサイトです。
            p 蒲田にある素敵なケーキ屋さんを紹介するサイトです。このサイトでは、「Patisserie NAOHIRA」、「patisserie MANO」、「Rouge Blanche」、「Belle Fille」に取材協力させていただきました。
            p 地域に愛される、みんなが笑顔になれる暖かい場所が蒲田にはたくさんあり、
            p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        .movie__thanks
          p Special Thanks
          p 「Patisserie NAOHIRA」「patisserie MANO」「Rouge Blanche」「Belle Fille」(順不同)
    vue_footer
</template>

<script>
  // components
  import vue_menu from '@/components/vueMenu';
  import vue_footer from '@/components/vueFooter';
  // library
  export default {
    components: {
      vue_menu,
      vue_footer,
    },
    mounted () {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 3000)
      })
    }
  }
</script>
<style>
.VueCarousel-pagination {
  display: none !important;
}
</style>
<style lang="scss" scoped>
  .first{
    background: $primary;
    height: 30vh;
    width: 100%;
    @include middle;
    img{
      height: 10vh;
      width: auto;
    }
  }

  .movie{
    padding: 4rem 0;
    position: relative;
    margin: 2rem 0 10rem;
    &__bg{
      position: absolute;
      bottom: 0;
      z-index: -1;
      content: "";
      width: 100%;
      height: 80vh;
      background: $primary_daken;
    }
    &__wrap{
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    &__title{
      margin: auto;
      display: inline-block;
      flex-direction: column;
      @include middle;
        &__text{
          color: $text_color;
        }
        &__logo{
          height: 2rem;
          width: auto;
        }
        &__bar{
          margin-top: 1rem;
          content: "";
          width: 1px;
          height: 4rem;
          background: $text_color;
        }
    }
    &__contents{
      width: 100%;
      height: 400px;
      padding: 0 24vw;
      iframe{
        width: 100%;
        height: 100%;
      }
    }
    &__description{
      margin-top: 3rem;
      padding: 0 24vw;
      display: flex;
      flex-direction: row;
      &__title{
        font-size: 3rem;
        padding-right: 5.5rem;
      }
      &__text{
        &__link{
          margin-top: 3rem;
          display: flex;
          justify-content: flex-end;
          flex-direction: row;
          &__text{
            margin-right: 1rem;
            // &:after{
            //   content: "";
            //   width: 100%;
            //   height: 1px;
            //   background: $bg_white;
            //   display: inline-block;
            // }
          }
          &__button{
            width: 3rem !important;
            height: auto !important;
            margin: 0 !important;
          }
        }
      }
      p{
        margin-top: 2rem;
      }
      p:first-child{
        margin-top: auto;
      }
    }
    &__thanks{
      padding: 6rem 0;
    }
  }
</style>
