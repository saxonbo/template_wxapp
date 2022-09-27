const { logError } = require('./log')
const { request } = require('./request')

function loginWithPhoneCode(phoneCode: string, uuidCode: string) {
  return request({
    url: '/login/loginCode',
    data: {
      phoneCode,
      uuidCode
    },
    header: { "content-type": "application/x-www-form-urlencoded" },
  })
    .then((repsonse: any) => {
      if (repsonse.result === '200') {
        wx.setStorageSync('token', repsonse.data.token)
        wx.setStorageSync("account", repsonse.data.account)
        return repsonse.data
      } else {
        return Promise.reject(new Error('登录失败'))
      }
    })
    .catch((error: any) => {
      logError("登录失败 =>", error);
      wx.showToast({
        title: '登录失败',
        icon: 'none'
      })
    })
}

module.exports = {
  loginWithPhoneCode: loginWithPhoneCode,
}