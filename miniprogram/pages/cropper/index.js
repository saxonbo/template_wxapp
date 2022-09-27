import WeCropper from "../../components/we-cropper/we-cropper";
const {
  request,
  uploadFile
} = require("../../utils/request");
const device = wx.getSystemInfoSync();
const width = device.windowWidth;
const height = device.windowHeight - 50;

Page({
  data: {
    cropperOpt: {
      cropper: [],
      id: "cropper",
      targetId: "targetCropper",
      pixelRatio: device.pixelRatio,
      width,
      height,
      scale: 2.5,
      zoom: 8,
      cut: {
        x: (width - 300) / 2,
        y: (height - 300) / 2,
        width: 300,
        height: 300,
      },
      boundStyle: {
        color: "green",
        mask: "rgba(0,0,0,0.8)",
        lineWidth: 1,
      },
    },
  },
  onLoad() {
    const {
      cropperOpt
    } = this.data;
    this.cropper = new WeCropper(cropperOpt);
    // 通过 pushOrign 方法载入已选择的图片
    this.imageInfo = wx.getStorageSync("cropperImage");
    this.cropper.pushOrign(this.imageInfo.url);
  },
  touchStart(e) {
    this.cropper.touchStart(e);
  },
  touchMove(e) {
    this.cropper.touchMove(e);
  },
  touchEnd(e) {
    this.cropper.touchEnd(e);
  },
  getCropperImage() {
    // 当进行确认操作时进行裁剪, 获得临时路径图片
    this.cropper.getCropperImage((tempFilePath) => {
      this.imageInfo.url = tempFilePath;
      uploadFile({
        url: "/admin/upload/picture",
        filePath: tempFilePath,
        name: "file",
        formData: {

        },
        success: (res) => {
         this.handleBack()
        },
      });
    });
  },
  handleBack() {
    wx.navigateBack();
  },
});