const { globalData } = getApp<IAppOption>()

Component({
  externalClasses: ['custom-class'],
  options: {
    multipleSlots: true
  },
  properties: {
    showBack: {
      type: Boolean,
      value: true
    },
    title: {
      type: String,
      value: ''
    }
  },
  data: {
    clientRect: globalData.clientRect,
    systemInfo: globalData.systemInfo,
    height: globalData.navHeight,
    containerStyle: ''
  },
  lifetimes: {
    attached() {
      const { height, systemInfo } = this.data
      this.setData({
        containerStyle: `height: ${height}px; top: 0px; padding-top: ${systemInfo?.statusBarHeight}px`
      })
    }
  },
  methods: {
    handleBack() {
      wx.navigateBack({
        fail: (err) => {
          console.log('Nav Bar handleBack fail =>', err)
        }
      });
    }
  }
})
