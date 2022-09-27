// const { request } = require('../../utils/request')
const util = require('../../utils/util')
Page({
  data: {
    banner_flag: ['https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F3%2F59914c437c099.jpg%3Fdown&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666851651&t=84ae871730c479efa2f5dcc521d783a3'],
  },
  onLoad() {

  },
  // 登录
  getphonenumber(e: any) {
    const phoneCode = e.detail.code;
    if (phoneCode) {
      wx.showLoading({
        title: "登录中",
        mask: true,
      });
      wx.login({
        success: (result: WechatMiniprogram.LoginSuccessCallbackResult) => {
          util.loginWithPhoneCode(phoneCode, result.code).then((res: Record<string, any>) => {
            console.log('loginWithPhoneCode response data =>', res)
            this.setData({
              login: true,
            });
            wx.showToast({
              title: "登录成功",
            });
          })
        },
      });
    }
  }
})

export { }