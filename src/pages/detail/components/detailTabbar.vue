<template>
  <div>
    <van-goods-action>
      <van-goods-action-icon
        icon="chat-o"
        text="客服"
        @click="onClickIcon"
      />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        @click="onClickIcon"
      />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="onClickButton"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="onClickButton"
      />
    </van-goods-action>



    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods_info"
      :goods-id="goods_id"
      :hide-stock="sku.hide_stock"
    />
  </div>
  
</template>

<script>
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';

import { Sku } from 'vant';

export default {
  name: 'detailTabbar',
  data() {
    return {
      show: true,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: '颜色',
            v: [
              {
                id: '30349', // skuValueId：规格值 id
                name: '红色', // skuValueName：规格值名称
                imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
              },
              {
                id: '1215',
                name: '蓝色',
                imgUrl: 'https://img.yzcdn.cn/2.jpg'
              }
            ],
            k_s: 's1'
          }
        ],


        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110, // 当前 sku 组合对应的库存
            goods_id: 946755
          }
        ],

        price: '1.00', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        hide_stock: false,
        none_sku: false, // 是否无规格商品
      },

      goods_id: '946755',
      goods_info: {
        title: '测试商品A',
        picture:
          'https://img.yzcdn.cn/upload_files/2017/03/16/Fs_OMbSFPa183sBwvG_94llUYiLa.jpeg?imageView2/2/w/100/h/100/q/75/format/jpg' 
      },
      
    } 
  },
  components: {
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    [Sku.name]: Sku
  },
  methods: {
    onClickIcon() {
      console.log('点击图标');
    },
    onClickButton() {
      console.log('点击按钮');
    },
    onAddCartClicked() {
      console.log(1);
    },
    onBuyClicked() {
      console.log(2);
    }
  }
}
</script>

<style>

</style>
