App<IAppOption>({
  globalData: {
    systemInfo: undefined,
    clientRect: undefined,
    navHeight: 60,
  },
  onLaunch() {
    this.setNavBarInfo()
  },
  setNavBarInfo() {
    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    this.globalData.systemInfo = systemInfo;
    // 获取菜单按钮位置信息
    const clientRect = wx.getMenuButtonBoundingClientRect();
    this.globalData.clientRect = clientRect;
    // 导航栏高度 = 状态栏高度 + 菜单按钮与状态栏的间隔 + 菜单按钮高度 + 菜单按钮与页面的间隔
    // 即 clientRect.top + clientRect.height + (clientRect.top - systemInfo.statusBarHeight)
    this.globalData.navHeight = clientRect.height + clientRect.top * 2 - systemInfo.statusBarHeight;
  }
})