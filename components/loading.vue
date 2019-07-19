<template lang="pug">
  <div v-if="loading" class="loading-page">
    .cake_box
      cake
  </div>
</template>

<script>
import cake from '@/components/lottie_cake'
import {TweenMax} from 'gsap';

export default {
  components :{
    cake
  },
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      console.log("start");
      this.loading = true
    },
    finish () {
      console.log("finish");
      TweenMax.to('.loading-page',0.5,{
        opacity:0,
      })
      window.setTimeout(
        ()=>{
          this.loading = false
        },600
      )

    }
  }
}
</script>

<style scoped lang="scss">
body{
  @include full_size;
  overflow: hidden;
}
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  @include full_size;
  @include middle;
  background: $bg_white;
  background-image: url("/image/back_pattern.png");
  background-repeat: repeat;
  .cake_box{
    height: 300px;
  }
}

</style>
