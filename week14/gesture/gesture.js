let element = document.documentElement;
//鼠标监听事件
element.addEventListener('mousedown', e => {
  start(e)
  const mousemove = event => {
    move(event);
  }

  const mouseup = event => {
    end(event)
    element.removeEventListener('mousemove', mousemove);
    element.removeEventListener('mouseup', mouseup);
  }

  element.addEventListener('mousemove', mousemove)
  element.addEventListener('mouseup', mouseup)
});
//触摸屏事件监听
element.addEventListener("touchstart", event => {
  for (let touch of event.changedTouches) {
    start(touch)
  }
});

element.addEventListener("touchmove", event => {
  for (let touch of event.changedTouches) {
    move(touch)
  }
});

element.addEventListener("touchend", event => {
  for (let touch of event.changedTouches) {
    end(touch)
  }
})

element.addEventListener("touchcancel", event => {
  for (let touch of event.changedTouches) {
    cancel(touch)
  }
});

const start = (point) => {

}

const move = (point) => {
  console.log(point.clientX, point.clientY)
}

const end = (point) => {

}

const cancel = (point) => {

}