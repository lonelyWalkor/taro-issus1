<template>
  <view class="index">
    <view class="index-container" :class="toogleClass ? 'test-class-toogle' : ''">
      <AtNoticebar marquee>
        欢迎使用 Taro UI Vue
      </AtNoticebar>
      <view @tap="toggleClassHandler">切换class 的时候 hydrated 类不在了  导致页面不展示</view>
      <AtButton
        type="primary"
        :on-click="handleClick"
      >
        AtButton
      </AtButton>
      <AtToast :is-opened="show" :text="msg" :on-close="handleClose"></AtToast>
    </view>
  </view>
</template>

<script>
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
      this.show = true
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
