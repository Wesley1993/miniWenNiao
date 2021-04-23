// component/custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#C4C4C4",
    selectedColor: "#FF8C34",
    list: [{
      pagePath: "/pages/home/home",
      iconPath: "/images/tab-home.png",
      selectedIconPath: "/images/tab-home-active.png",
      text: "首页"
    }, {
      pagePath: "/pages/order/order",
      iconPath: "/images/tab-order.png",
      selectedIconPath: "/images/tab-order-active.png",
      text: "订单"
    }, {
      pagePath: "/pages/my/my",
      iconPath: "/images/tab-my.png",
      selectedIconPath: "/images/tab-my-active.png",
      text: "我的"
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})
