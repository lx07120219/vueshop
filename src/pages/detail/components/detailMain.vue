<template>
  <div>
    <div class="item-title">
      <van-divider>详情</van-divider>
    </div>

    <div class="dm-wrap">
      <van-image src="https://img.yzcdn.cn/vant/cat.jpeg">
        <template v-slot:loading>
          <!-- <van-loading type="spinner" size="20" /> -->
        </template>
      </van-image>
    </div>
  </div>
</template>

<script>
import { Divider } from 'vant';
import { Image } from 'vant'

export default {
  name: 'detailMain',
  components: {
    [Divider.name]: Divider,
    [Image.name]: Image
  }
}
</script>

<style>

</style>
