<template lang="pug">
  <no-ssr>
    GmapMap(
      :center="center"
      :zoom="zoom"
      style="width: 100%; height: 600px;"
      :options="options"
      )
      .naohira(v-if="num === 0")
        GmapMarker(:clickable="true" :position="{lat: 35.5660952, lng: 139.720335}" :icon="naohira_pos") ナオヒラ
      .mano(v-else-if="num === 1")
        GmapMarker(:clickable="true" :position="{lat: 35.5712931, lng: 139.7126375}" :icon="mano_pos") パティスリーマノ
      .Rouge(v-else-if="num === 2")
        GmapMarker(:clickable="true" :position="{lat: 35.564669, lng: 139.7123632}" :icon="Rouge_Blanche_pos") ルージュブランシュ 蒲田店
      .bell(v-else-if="num === 3")
        GmapMarker(:clickable="true" :position="{lat: 35.557435, lng: 139.7231873}" :icon="bellefille_pos") ベルフィーユ
      .all(v-else)
        GmapMarker(:clickable="true" :position="{lat: 35.5712931, lng: 139.7126375}" :icon="mano_pos") パティスリーマノ
        GmapMarker(:clickable="true" :position="{lat: 35.564669, lng: 139.7123632}" :icon="Rouge_Blanche_pos") ルージュブランシュ 蒲田店
        GmapMarker(:clickable="true" :position="{lat: 35.5660952, lng: 139.720335}" :icon="naohira_pos") ナオヒラ
        GmapMarker(:clickable="true" :position="{lat: 35.557435, lng: 139.7231873}" :icon="bellefille_pos") ベルフィーユ
  </no-ssr>
</template>

<script>
  import mapstyle from '@/assets/json/mapstyle.json'
  import {gmapApi} from 'vue2-google-maps'

  export default {
    computed: {
      google: gmapApi
    },
    props:{
      num:Number,
    },
    mounted(){
      console.log(this.num);
    },
    data(){
      return {
        center: {lat: 35.566, lng:139.716},
        zoom: 15,
        mano_pos: {
          url: require('~/assets/icon/mano.png'),
          size: {width: 111, height: 82, f: 'px', b: 'px',},
          scaledSize: {width: 111, height: 82, f: 'px', b: 'px',},
        },
        bellefille_pos: {
          url: require('~/assets/icon/bellefille.png'),
          size: {width: 111, height: 82, f: 'px', b: 'px',},
          scaledSize: {width: 111, height: 82, f: 'px', b: 'px',},
        },
        naohira_pos: {
          url: require('~/assets/icon/naohira.png'),
          size: {width: 111, height: 82, f: 'px', b: 'px',},
          scaledSize: {width: 111, height: 82, f: 'px', b: 'px',},
        },
        Rouge_Blanche_pos: {
          url: require('~/assets/icon/Rouge_Blanche.png'),
          size: {width: 111, height: 82, f: 'px', b: 'px',},
          scaledSize: {width: 111, height: 82, f: 'px', b: 'px',},
        },
        options:{
          disableDefaultUI: true,
          scrollwheel: true,
          styles: mapstyle
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
