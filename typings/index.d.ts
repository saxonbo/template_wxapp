/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    systemInfo?:WechatMiniprogram.SystemInfo,
    clientRect?:WechatMiniprogram.ClientRect,
    navHeight?: Number
  }
  setNavBarInfo:()=>void
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}