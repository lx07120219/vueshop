<template>
  <div>
    <div class="item-title">
      <van-divider>评价</van-divider>
    </div>

    <div class="da-wrap">
      <h2 class="da title">宝贝评价<span>(10)</span></h2>

      <ul class="da-list">
        <li>
          <div class="da-item">
            <div class="user-info">
              <div class="avatar">头像</div>

              <div class="name">名字</div>

              <div class="star">
                <van-rate v-model="value" />
              </div>
            </div>

            <div class="da-text">
              文字文字文字文字文字文字文字文字文字文字文字文字
            </div>
          </div>
        </li>
      </ul>

      <div class="da-more">
        查看全部评价
      </div>
    </div>
  </div>
</template>

<script>
import { Divider } from 'vant';
import { Rate } from 'vant';

export default {
  data() {
    return {
      value: 3
    }
  },
  components: {
    [Divider.name]: Divider,
    [Rate.name]: Rate
  }
}
</script>

<style>

</style>
