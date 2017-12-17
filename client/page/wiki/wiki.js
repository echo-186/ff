var app = getApp();
Page({
  data: {
    array: ['Unit1：开源硬件与Web编程入门 ', 'Unit2：计算机和微机实验', 'Unit3：电路基础实验', 'Unit4：网络基础实验', 'Unit 5: 复杂工程进阶实验', 'Unit 6：虚拟产业环境中的工程创新'],
  objectArray: [
    {
      id: 0,
      name: 'Unit1：开源硬件与Web编程入门 '
    },
    {
      id: 1,
      name: 'Unit2：计算机和微机实验'
    },
    {
      id: 2,
      name: 'Unit3：电路基础实验'
    },
    {
      id: 3,
      name: 'Unit4：网络基础实验'
    },
    {
      id:4,
      name: 'Unit 5: 复杂工程进阶实验'
    },
    {
      id: 5,
      name: 'Unit 6：虚拟产业环境中的工程创新'
    }
  ],
  index: 0,
    
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    app.appData.id = e.detail.value
    if(app.appData.id==0)
    {
      console.log(app.appData.id)
      wx.navigateTo({
        url: "../u1/u1"
     })
    }
    else if (app.appData.id == 1)
    {
      wx.navigateTo({
        url: "../u2/u2"
      })
    }
    else if (app.appData.id == 2) {
      wx.navigateTo({
        url: "../u3/u3"
      })
    }
    else {
     
      wx.showModal({
        title: 'emmm',
        content: '死心吧少年，这个没得复习',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }

  },
})
