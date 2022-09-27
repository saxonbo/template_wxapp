const { logInfo, logError } = require('./log')

// export const baseUrl = "https:/####"; // 线上生产环境接口
export const baseUrl = "http://###"; // 线下开发环境接口
export const baseUrlMock = "https://mock.apifox.cn/"; // mock 接口

interface IRequestOption extends WechatMiniprogram.RequestOption {
  isMock: boolean,
}
export function request(option: IRequestOption): Promise<any> {
  return new Promise((resolve, reject) => {
    logInfo('发起请求 url data =>', option.url, option.data)
    wx.request({
      ...option,
      url: `${option.isMock ? baseUrlMock : baseUrl}${option.url}`,
      method: option.method || 'POST',
      header: {
        ...option.header,
        token: wx.getStorageSync('token'),
      },
      success: (res: Record<string, any>) => {
        if (res.data.code === 'unLogin') {
          handleUnLogin();
          reject(res.data)
        } else {
          resolve(res.data);
        }
      },
      fail: (err) => {
        logError('请求失败响应 =>', option.url, err)
        reject(err)
      }
    })
  })
}
// 处理登录状态异常
function handleUnLogin() {
  wx.showToast({
    title: '用户未登录',
    icon: 'error',
    duration: 2000,
    success: () => {
      wx.removeStorageSync('token');
      wx.reLaunch({
        url: '/pages/index/index',
      })
    }
  })
}
// 上传文件
export function uploadFile(option: WechatMiniprogram.UploadFileOption): WechatMiniprogram.UploadTask {
  console.log('uploadFile option =>', option)
  return wx.uploadFile({
    ...option,
    url: baseUrl + option.url,
    header: {
      token: wx.getStorageSync('token'),
      ...option.header
    }
  })
}
