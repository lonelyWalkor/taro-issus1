export default {
  pages: [
    'pages/index/index',
    'pages/shop/index',
    'pages/user/index',
    'pages/order/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: "#999",
    selectedColor: "#F63D29",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        pagePath: "pages/user/index",
        text: "首页",
      },
      {
        pagePath: "pages/order/index",
        text: "首页",
      },
    ]
  }
}
