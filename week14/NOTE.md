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


##### 处理鼠标事件
  * 鼠标有左键、中间键、右键等
  * 左键点击是event.button = 0 ， 中间键是event.button = 1，右键是event.button = 2；
  * mousemove时，event.button都是0，使用event.buttons来判断；
  * mousemove时 buttons 的顺序是反过来的，采用古典的“掩码”设计，即二进制来表示；
    if (button === 2) {
          key = 4;
        } else if (4 === button) {
          key = 2;
        } else {
          key = button
        }

  * mousemove时，需要移位处理：


##### 派发事件
  * 使用Event，new Event(type):type是事件名称；
    let event = new Event(type);
  * 再调用el.dispatchEvent(event)，将事件注册到元素上；
  * el.addEventListener('tap')监听事件；

##### flick事件
  * 需要计算鼠标或者touch移动的距离；
  * 需要计算记录每个点的当前时间；
  * 过滤掉时间小于500毫秒的点；
  * 计算速度 v单位（像素每毫秒）
  * v>1.5 标记为flick事件