##### 手势与动画 | 手势的基本知识
  * 触摸屏上 touch start move 和 end，手指触摸时会有这些事件触发，由于手指的柔软性；
  * 鼠标上   down move 和 up；
  
  
  * 手势的基本知识：
    
           end
    start -----> tap  
          移动10px
          ---------> pan start (pan摄影中的术语，表示移动了摄像机) 
                           move      end
                           ----> pan ---> pan end
                                     end且速度>?
                                     ---------> flick(swipe) 扫一下
          按住超0.5s                end
          -------->  press start   ------> press end
                                  移动10px
                                  ---------> pan start (同上)