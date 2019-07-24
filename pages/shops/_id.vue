<template lang="pug">
  section.container
    vue_menu
    .first(v-bind:style="'background-image: url(/image/shop/'+ $route.params.id +'_2.png)'")
      h1 {{ shop_list[$route.params.id].name }}
    .single
      .single__box
        .single__box__text
          h1 {{ shop_list[$route.params.id].name }}
          p {{ shop_list[$route.params.id].single.introduce }}
        .single__box__image
          img(:src='"/image/shop/"+ $route.params.id +"_1.png"')
          img(:src='"/image/shop/"+ $route.params.id +"_1.png"').shadow

      .single__box
        .single__box__image
          img(:src='"/image/shop/"+ $route.params.id +"_2.png"')
          img(:src='"/image/shop/"+ $route.params.id +"_2.png"').shadow
        .single__box__text
          h1 おすすめ商品
          p {{ shop_list[$route.params.id].single.recommend }}

      .single__box
        .single__box__text
          h1 お店へのこだわり
          p {{ shop_list[$route.params.id].single.commit }}
        .single__box__image
          img(:src='"/image/shop/"+ $route.params.id +"_3.png"')
          img(:src='"/image/shop/"+ $route.params.id +"_3.png"').shadow



    vue_footer
</template>

<script>
  // components
  import vue_menu from '@/components/vueMenu';
  import vue_footer from '@/components/vueFooter';
  // library
  import shops from '@/assets/json/shops.json';

  export default {
    components: {
      vue_menu,
      vue_footer,
    },
    data(){
      return {
        shop_list: shops
      }
    },
    mounted () {
      // this.$nextTick(() => {
      //   this.$nuxt.$loading.start()
      //   setTimeout(() => this.$nuxt.$loading.finish(), 3000)
      // })
    }
  }
</script>

<style lang="scss" scoped>
  // .container{
  //   margin-left: 5rem !important;
  // }

  .first{
    width: 100%;
    height: 100vh;
    background: $primary;
    // background-image: url("/image/dummy.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    @include middle;
  }
  .single{
    padding: 6rem 20vw;
    h1,p{
      color: $text_color;
    }
    &__box{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding-bottom: 7rem;
      &:last-child{
        padding-bottom: 0rem;
      }
      & > *:first-child{
        padding-right: 5rem;
      }
      &__text{
        h1{
          padding-bottom: 1rem;
          margin-bottom: 4rem;
          position: relative;
          &:after{
            position: absolute;
            bottom: 0;
            left: 0;
            display: inline-block;
            height: 2px;
            width: 100%;
            background: $primary;
            content: " ";
          }
        }

      }
      &__image{
        width: auto;
        height: auto;
        position: relative;

        img{
          width: 480px;
          height: auto;
        }
        .shadow{
          position: absolute;
          z-index: -1;
          top: 4rem;
          left: 4rem;
          filter: blur(1rem) brightness(120%);
          opacity: 0.6;
        }
      }
    }
  }



</style>
<style lang="scss" scoped>
  @include mq(sm){
    .first{
      width: 100%;
      height: 100vh;
      background: $primary;
      // background-image: url("/image/dummy.png");
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      @include middle;
    }
    .single{
      padding: 6rem 10vw;
      h1,p{
        color: $text_color;
      }
      &__box{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        padding-bottom: 7rem;
        &:last-child{
          padding-bottom: 0rem;
          padding-bottom: 0rem;

        }
        & > *:first-child{
          padding-right: 0rem;
          padding-bottom: 2rem;
        }
        &__text{
          h1{
            padding-bottom: 0.5rem;
            margin-bottom: 1rem;
            position: relative;
            &:after{
              position: absolute;
              bottom: 0;
              left: 0;
              display: inline-block;
              height: 2px;
              width: 100%;
              background: $primary;
              content: " ";
            }
          }

        }
        &__image{
          width: 100%;
          height: auto;
          position: relative;

          img{
            width: 100%;
            height: auto;
          }
          .shadow{
            position: absolute;
            z-index: -1;
            top: 4rem;
            left: 4rem;
            filter: blur(1rem) brightness(120%);
            opacity: 0.6;
          }
        }
      }
    }
  }
</style>
