<template lang="pug">
  section.container
    vue_menu
    .first
      video.first__movie(src="/image/cake.mp4" poster="/image/dummy.png" autoplay loop muted playsinline)
      img(src="image/logo_white.svg")

    .movie
      .movie__bg
      .movie__wrap
        .movie__title
          h1.movie__title__text 蒲田のケーキ屋さん。
          img.movie__title__logo(src="/image/logo.svg")
          span.movie__title__bar
        .movie__contents
          <iframe width="560" height="315" src="https://www.youtube.com/embed/b3rpFousaOI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        .movie__description
          h1.movie__description__title ABOUT
          .movie__description__text
            p 蒲田には、地域に愛される、tがたくさんあります。その中でケーキ屋さんに注目してみました。このサイトでは、「Patisserie NAOHIRA」、「Patisserie MANO」、「Rouge Blanche」、「Belle Fille」さんに...
            p Kamata has many warm places that are loved by the local community and can make everyone smile. In this website, you will find out more about Kamata cake shops - patisserie NAOHIRA, patisserie MANO, Rouge Blanche and Belle Fille
            link_button(link="/about")
    .gallery
      .gallery__wrap
        .title
          h1.title__text SHOP INFO
          p.title__subtext 店舗情報
        <no-ssr>
          carousel(
            :per-page="1"
            :autoplay="true"
            :loop="true" )
            slide.slide(v-for="(shop,index) in shop_list" :key="index")
              .slide__wrap
                nuxt-link(:to='"/shops/" + index') {{shop.name}}
                img(:src='"/image/shop/"+ index +"_3.png"')
        </no-ssr>
        .gallery__link
          link_button(link="shops")
        .gallery__bg
    .map
      .map__wrap
        .title
          h1.title__text MAP
          p.title__subtext 地図
        vueMap
        .map__list
          .map__list__item(v-for="(shop,index) in shop_list" :key="index")
            h2 {{shop.name}}
            p {{shop.adress}}
            p {{shop.tell}}
            a(:href="shop.website" target="_brank") website
    vue_footer
</template>

<script>
  // components
  import vue_menu from '@/components/vueMenu';
  import vue_footer from '@/components/vueFooter';
  import vue_button from '@/components/lottie_button';
  import link_button from '@/components/link_button';
  import cake from '@/components/lottie_cake'
  import vueMap from '@/components/vueMap'
  // library
  import shops from '@/assets/json/shops.json'
  export default {
    components: {
      vue_menu,
      vue_footer,
      vue_button,
      link_button,
      cake,
      vueMap
    },
    data(){
      return {
        shop_list: shops
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 9000)
      })
    }
  }
</script>

<style>
  .VueCarousel-pagination {
    display: none !important;
  }
  @include mq(sm){
    h1{
      font-size: 1.5rem !important;
    }
  }
</style>


<style lang="scss" scoped>
  .first{
    width: 100%;
    height: 100vh;
    background: $primary;
    // background-image: url("/image/cake.gif");
    position: relative;
    overflow: hidden;
    &:before{
      background-color: #{$primary_daken}20;
      /* 自由に位置指定 */
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      content: ' ';
      z-index: 2;
    }
    &__movie{
      top: 0;
      left: 0;
      position: absolute;
      @include full_screen;
      transform: scale(1.4);
      height: auto;
    }
    img{
      @include absolute_middle;
      width: 50%;
      min-width: 280px;
      max-width: 700px;
      height: auto;
      z-index: 3;
    }
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
  .gallery{
    margin-top: 5rem;
    &__wrap{
      position: relative;
    }
    &__bg{
      position: absolute;
      bottom: 0;
      z-index: -1;
      content: "";
      width: 100%;
      height: 60vh;
      background: $primary_daken;
    }
    &__title{
      padding: 2rem;
      &__text{
        color: $primary_daken;
        text-align: center;
      }
      &__subtext{
        color: $primary_daken;
        text-align: center;
        @include middle;
        &:after,&:before{
          margin: 0 1rem;
          width: 3rem;
          height: 1px;
          display: inline-block;
          content: "";
          background: $primary_daken;
        }
      }
    }
    .slide{
      &__wrap{
        padding: 0 5rem;
        position: relative;
        @include full_size;
        display: flex;
        justify-content: flex-end;

        a{
          position: absolute;
          top: 0;bottom: 0;
          left: 5rem;
          z-index: 1;
          display: inline-block;
          height: 4rem;
          width: auto;
          margin: auto;
          font-size: 3rem;
        }
        img{
          height: 50vh;
          width: 70vw;
          object-fit: cover;
        }
      }
    }
    &__link{
      padding: 0 5rem 5rem;
    }
  }
  .map{
    &__view{
      background-image: url("/image/map/map.png");
      background-repeat: no-repeat;
      background-attachment: local;
      background-size: cover;
      width: 100%;
      height: 70vh;
      position: relative;
      &__item{
        position: absolute;
        img{
          width: 120px;
          height: auto;
        }
      }
      &__bellefille{
        bottom: 43%;
        left: 52%;
      }
      &__mano{
        top: 2%;
        left: 43%;
      }
      &__naohira{
        top: 9%;
        left: 47%;
      }
      &__rouge{
        top: 20%;
        left: 40%;
      }
    }
    &__list{
      padding: 2rem 20vw;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-gap: 2rem;
      &__item{
        padding: 2rem;
        background: $bg_white;
        h2{
          padding-bottom: 2rem;
        }
        h2,p,a{
          color: $text_color;
        }
        a{
          font-size: 1rem;
        }
      }
    }
  }
</style>

<style lang="scss" scoped>
  @include mq(sm){
    .first{
      &:before{
      }
      &__movie{
        top: 0;
        left: 0;
        position: absolute;
        height: 100vh;
        width: auto;
        transform: scale(1);
        height: auto;
      }
      img{
      }
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
        width: 90%;
        height: 170px;
        iframe{
          width: 100%;
          height: 100%;
        }
      }
      &__bg{
        height: 130vh;
      }
      &__description{
        margin-top: 3rem;
        box-sizing: border-box;
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        &__title{
          padding-bottom: 2rem;
        }
        &__text{
          &__link{
            margin-top: 0rem;
            display: flex;
            justify-content: flex-end;
            flex-direction: row;
            .link{
              @include middle;

            }
            &__text{
              margin-right: 1rem;
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
    .gallery{
      margin-top: 5rem;
      &__wrap{
        position: relative;
      }
      &__bg{
        position: absolute;
        bottom: 0;
        z-index: -1;
        content: "";
        width: 100%;
        height: 70vh;
        background: $primary_daken;
      }
      &__title{
        padding: 2rem;

        &__text{
          color: $primary_daken;
          text-align: center;
        }
        &__subtext{
          color: $primary_daken;
          text-align: center;
          @include middle;
          &:after,&:before{
            margin: 0 1rem;
            width: 3rem;
            height: 1px;
            display: inline-block;
            content: "";
            background: $primary_daken;
          }
        }
      }
      .slide{
        @include full_size;
        height: 100vh;
        overflow: hidden;
        &__wrap{
          padding: 0rem;
          position: relative;
          @include full_size;
          display: flex;
          justify-content: flex-end;
          @include middle;
          h1{
            position: absolute;
            top: 0;bottom: 0;
            left: 0; right: 0;
            z-index: 1;
            display: inline-block;
            height: 2.5rem;
            width: auto;
            margin: auto;
            font-size: 2rem;
          }
          img{
            height: 70vw
          }
        }
      }
      &__link{
        padding: 0;
        padding-bottom: 1rem;
      }
    }
    .map{
      &__view{
        background-image: url("/image/map/map.png");
        background-repeat: no-repeat;
        background-attachment: local;
        background-size: cover;
        width: 100%;
        height: 70vh;
        position: relative;
        &__item{
          position: absolute;
          img{
            width: 120px;
            height: auto;
          }
        }
        &__bellefille{
          bottom: 43%;
          left: 52%;
        }
        &__mano{
          top: 2%;
          left: 43%;
        }
        &__naohira{
          top: 9%;
          left: 47%;
        }
        &__rouge{
          top: 20%;
          left: 40%;
        }
      }
      &__list{
        padding: 2rem 10vw;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-gap: 2rem;
        &__item{
          padding: 2rem;
          background: $bg_white;
          h2{
            padding-bottom: 2rem;
          }
          h2,p,a{
            color: $text_color;
          }
          a{
            font-size: 1rem;
          }
        }
      }
    }
  }
</style>
