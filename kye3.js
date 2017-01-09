defineClass('ViewController',{
            viewWillAppear: function(animated){
            self.super().viewWillAppear(animated);
            
            require('UIColor','UIView','UILabel','UIFont')
            
            var someView = UIView.alloc().initWithFrame({x:100,y:100,width:100, height:100})
            self.view().addSubview(someView)
            someView.setBackgroundColor(UIColor.redColor())
            
            self.view().setBackgroundColor(UIColor.greenColor())
            
            var label = UILabel.alloc().initWithFrame(self.view().bounds())
//            label.setBackgroundColor(UIColor.yellowColor())

            label.setText('安家费卡嘉莉噶发送噶框架啊哈 噶刻录机啊啊噶就打代理发的安居客老大姐离开噶噶金坷垃烧鹅啊啊大立科技两年哇大法官安康路解耦先花后果啊呢暗夜啊来拿抓恩阿里噶暗袋主打度量空间噶')
            label.setFont(UIFont.systemFontOfSize(30))
            label.setNumberOfLines(0)
//            label.sizeToFit()
//            label.setCenter(self.view().center())
            self.view().addSubview(label)
            
            console.log('这里证明我们走了');
          }
})
