<template lang="pug">
  section.container
    vue_menu
    .first

    .movie
      .movie__bg
      .movie__wrap
        .movie__title
          h1.movie__title__text 蒲田のケーキ屋さん。
          img.movie__title__logo(src="/image/logo.svg")
          span.movie__title__bar
        .movie__contents
          <iframe width="680" height="400" src="https://www.youtube.com/embed/vWaRiD5ym74" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        .movie__description
          h1.movie__description__title ABOUT
          .movie__description__text
            p ”Patisserie_Kamata.”は、蒲田にあるケーキ屋さんを紹介するサイトです。
            p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            nuxt-link.movie__description__text__link(to="/")
              .movie__description__text__link__text
                p Learn More

              vue_button.movie__description__text__link__button

    .gallery
      carousel(perPage="1")
        slide
          img(src="/image/dummy.png")
        slide
          img(src="/image/dummy.png")
        slide
          img(src="/image/dummy.png")
    vue_footer
</template>

<script>
  // components
  import vue_menu from '@/components/vueMenu';
  import vue_footer from '@/components/vueFooter';
  import vue_button from '@/components/lottie_button';

  // library
  export default {
    components: {
      vue_menu,
      vue_footer,
      vue_button,
    },
  }
</script>

<style lang="scss" scoped>

.container{
  .first{
    width: 100%;
    height: 100vh;
    background: $primary;
  }
  .movie{
    padding: 4rem 0;

    position: relative;
    &__bg{
      position: absolute;
      bottom: 0;
      z-index: -1;
      content: "";
      width: 100%;
      height: 50vh;
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
  }
}
</style>
