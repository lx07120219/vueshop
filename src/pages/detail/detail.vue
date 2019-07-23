<template>
  <div>
    <swiper></swiper>

    <detail-text></detail-text>
    <detail-assess></detail-assess>
    <detail-main></detail-main>
    <detail-tabbar></detail-tabbar>
  </div>
</template>

<script>
import swiper from '@/components/swiper'
import detailText from './components/detailText'
import detailAssess from './components/detailAssess'
import detailMain from './components/detailMain'
import detailTabbar from './components/detailTabbar'

export default {
  name: 'detail',
  components: {
    swiper,
    detailText,
    detailAssess,
    detailMain,
    detailTabbar
  }
}
</script>

<style>

</style>
