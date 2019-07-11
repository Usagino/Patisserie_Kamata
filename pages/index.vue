<template lang="pug">
  section.container
    vue_menu
    .first
</template>

<script>
  // components
  import vue_menu from '@/components/vueMenu';
  // library


  export default {
    components: {
      vue_menu
    },
  }
</script>

<style lang="scss" scoped>
.container{
  margin-left: 4rem;
  height: 500vh;
  .first{
    width: 100%;
    height: 100vh;
    background: $primary;
  }
}
</style>
