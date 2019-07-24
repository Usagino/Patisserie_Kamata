<template lang="pug">
  <no-ssr>
    GmapMap(:center="center" :zoom="zoom" style="width: 100%; height: 600px;"
      )
      GmapMarker(:position="{lat: 35.5712931, lng: 139.7126375}" :icon="markerOptions") パティスリーマノ
      GmapMarker(:position="{lat: 35.564669, lng: 139.7123632}") ルージュブランシュ 蒲田店
      GmapMarker(:position="{lat: 35.5660952, lng: 139.720335}") ナオヒラ
      GmapMarker(:position="{lat: 35.557435, lng: 139.7231873}") ベルフィーユ
  </no-ssr>
</template>

<script>
  import mapstyle from '@/assets/json/mapstyle.json'
  import {gmapApi} from 'vue2-google-maps'
  const Mano = require('~/assets/icon/mano.png');
  export default {
    computed: {
      google: gmapApi
    },
    data(){
      return {
        center: {lat: 35.564405, lng:139.720248},
        zoom: 15,
        markerOptions: {
          url: Mano,
          size: {width: 111, height: 82, f: 'px', b: 'px',},
          scaledSize: {width: 111, height: 82, f: 'px', b: 'px',},
        },
        options:{
          disableDefaultUI: true,
          scrollwheel: true,
          style:mapstyle
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
