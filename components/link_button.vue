<template lang="pug">
  nuxt-link.link(to="/")
    .link__text
      p Learn More
    vue_button.link__button
</template>

<script>
  import vue_button from '@/components/lottie_button';
  export default {
    components:{
      vue_button,
    }
  }
</script>

<style lang="scss" scoped>
  .link{
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
</style>
