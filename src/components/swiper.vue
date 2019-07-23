<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <router-link to="/detail">
          <img src="@/assets/images/1.jpg" alt="">
        </router-link>
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/images/2.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/images/3.jpg" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';

export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
}
</script>

<style>

</style>
