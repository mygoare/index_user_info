//index.js
//获取应用实例
const app = getApp()

const { isEmpty } = require('../../libs/util')

Page({
  onLoad: function () {
  },
  onTap: function(e) {
    console.log(e);

    const {userInfo} = app.globalData;

    if (!isEmpty(userInfo)) {
      wx.showModal({
        content: 'success',
        showCancel: false,
        success: function (res) {
            if (res.confirm) {
                console.log('success')
            }
        }
      });
    } else {
      wx.showModal({
        title: 'title',
        content: 'need info',
        confirmText: "add info",
        cancelText: "cancel",
        success: function (res) {
          console.log(res);
          if (res.confirm) {
            console.log('go add info');
            wx.navigateTo({
              url: '/pages/info/info'
            })
          } else {
            console.log('cancel')
          }
        }
      });
    }
  }
})
