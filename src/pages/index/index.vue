<template>
  <view class="index">
    <view class="index-container" :class="toogleClass ? 'test-class-toogle' : ''">
      <AtNoticebar marquee>
        欢迎使用 Taro UI Vue
      </AtNoticebar>
      <view @tap="toggleClassHandler">跳转到非tabbar页面 首页没有隐藏 导致下一个页面没有展示</view>
      <view @tap="toggleClassHandler">非tabbar页面 内容好高度没有铺满 然后预留了 tabbar的高度导致页面底部空白</view>
      <AtButton
        type="primary"
        :on-click="handleClick"
      >
        跳转去 非 tabbar 页面
      </AtButton>
    </view>
  </view>
</template>

<script>
import Taro from '@tarojs/taro';
// 按需引入, 更小的应用体积
import { AtButton, AtToast, AtNoticebar } from 'taro-ui-vue';
import "taro-ui-vue/dist/style/components/button.scss"
import "taro-ui-vue/dist/style/components/toast.scss"
import "taro-ui-vue/dist/style/components/noticebar.scss"
import './index.scss'
export default {
    components: {
    AtButton,
    AtToast,
    AtNoticebar,
  },
  data () {
    return {
      msg: 'Hello world!',
      show: false,
      itemCount: 5,
      columns: [],
      toogleClass: true,
    }
  },
  mounted() {
  },
  methods: {
    toggleClassHandler() {
      this.toogleClass = !this.toogleClass;
    },
    handleClick () {
      Taro.navigateTo({ url: '/pages/shop/index' });
    },
    handleClose () {
      this.show = false
    }
  },
  render(h) {
    return h();
  },
}
</script>
