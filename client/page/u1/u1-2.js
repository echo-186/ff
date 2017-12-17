

Page({
  data: {
    pictures: [
      'http://chuantu.biz/t6/178/1513499252x-1404817651.png',
      'http://chuantu.biz/t6/178/1513499288x-1404817651.png',
      'http://chuantu.biz/t6/178/1513499317x-1404817651.png',
      'http://chuantu.biz/t6/178/1513499343x-1404817651.png',
      'http://chuantu.biz/t6/178/1513499377x-1404817651.png',
      'http://chuantu.biz/t6/178/1513499414x-1404817651.png']
      
  },
  previewImage: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index,
      pictures = this.data.pictures;
    wx.previewImage({
      current: pictures[index],
      urls: pictures
    })
  }
})
