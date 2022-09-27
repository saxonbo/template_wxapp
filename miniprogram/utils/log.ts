const log: WechatMiniprogram.RealtimeLogManager = wx.getRealtimeLogManager()

module.exports = {
  logInfo() {
    log.info(arguments)
  },
  logWarn() {
    log.warn(arguments)
  },
  logError() {
    log.error(arguments)
  }
}