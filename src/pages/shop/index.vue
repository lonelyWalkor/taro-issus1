<template>
  <view class="index shop-page">
    <view class="index-container">
    </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import { AtButton, AtToast, AtNoticebar } from 'taro-ui-vue';
import "taro-ui-vue/dist/style/components/button.scss"
import "taro-ui-vue/dist/style/components/toast.scss"
import "taro-ui-vue/dist/style/components/noticebar.scss"
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

<style lang="scss">
.shop-page {
  background-color: red;
  height: 100vh;
}
</style>
