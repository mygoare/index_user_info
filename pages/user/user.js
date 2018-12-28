const { isEmpty } = require('../../libs/util');

const app = getApp();

Page({
  data: {
    title: '',
    size: 20,
    type: '',
  },
  onShow: function(){
    const { userInfo, userInfoCollected } = app.globalData;

    this.setData({
      title: isEmpty(userInfo) ? 'No Info' : 'Has Info',
      type: userInfoCollected ? 'success' : '',
    })
  }
})