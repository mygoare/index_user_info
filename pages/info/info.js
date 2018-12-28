const app = getApp();

Page({
  data: {
    answer1: '',
    answer2: '',
  },
  onLoad: function() {
    const { answer1 = '', answer2 = '' } = app.globalData.userInfo;

    this.setData({
      answer1,
      answer2,
    })
  },
  formSubmit(e) {
    console.log('form submit with data', e.detail.value)

    app.globalData.userInfo = Object.assign({}, e.detail.value);
    app.globalData.userInfoCollected = true;

    console.log(app.globalData.userInfo, app.globalData.userInfoCollected);

    wx.navigateBack({});
  }
})