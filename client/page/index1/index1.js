
Page({
  data:{
    wiki:"wiki",
    help:"问答",
    program:"项目"
    // text:"这是一个页面"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  wiki:function()
  {
    wx.navigateTo({
      url: "/page/wiki/wiki"})
  },
})
