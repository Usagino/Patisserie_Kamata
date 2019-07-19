<template lang="pug">
  section.container
    vue_menu
    .shops
      .shops__title
        h1 SHOP
      .shops__list
        .shops__list__item(v-for="(shop,index) in shop_list" :key="index")
          h1 {{shop.name}}
          p {{shop.adress}}
          p {{shop.tell}}
    vue_footer
</template>

<script>
  // components
  import vue_menu from '@/components/vueMenu';
  import vue_footer from '@/components/vueFooter';
  import shops from '@/assets/json/shops.json'
  // library
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
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 3000)
      })
    }
  }
</script>

<style lang="scss" scoped>
  .shops{
    margin: 5rem 0;
    &__title{
      padding: 3rem;
      padding-bottom: 0px;
      h1{
        @include middle;
        flex-direction: column;
        color:$text_color;
        text-align: center;
        &:after{
          content: "";
          margin-top: 2rem;
          width: 1px;
          height: 4rem;
          background: $text_color;
          display: inline-block;
        }
      }
    }
    &__list{
      background: $bg_white;
      width: 42rem;
      margin: auto;
      &__item{
        border-bottom: 0.5px solid #{$text_color}cc;
        &:last-child{
          border-bottom: 0rem;
        }
        padding: 2rem 3rem;
        h1{
          padding-bottom: 1rem;
        }
        a{
          font-size: 1rem;
        }
      }

      h1,p,a{
        color:$text_color;
      }
    }
  }
</style>
