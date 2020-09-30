export class Dispatcher {
  constructor(element) {
    this.el = element;
  }

  dispatch(type, properties) {
    let event = new Event(type);
    for (let name in properties) {
      event[name] = properties[name];
    }
    this.el.dispatchEvent(event)
  }
}




//listen => recognize => dispatch
// new Listener( new Recognizer(dispatch))

export class Listener {
  constructor(element, recognizer) {
    let isListeningMouse = false;
    //鼠标监听事件
    element.addEventListener('mousedown', e => {
      const {
        button
      } = e;
      let context = Object.create(null);
      contexts.set(`mouse${1 << button}`, context);

      recognizer.start(e, context)
      const mousemove = event => {
        let button = 1;

        while (button <= event.buttons) {
          if (button & event.buttons) {
            //order of buttons & button property is not same
            let key;
            if (button === 2) {
              key = 4;
            } else if (4 === button) {
              key = 2;
            } else {
              key = button
            }
            let context = contexts.get(`mouse${key}`);
            recognizer.move(event, context);
          }
          button = button << 1;
        }
      }

      const mouseup = event => {
        let context = contexts.get(`mouse${1 << event.button}`);
        recognizer.end(event, context);
        contexts.delete(`mouse${1 << event.button}`)

        if (event.buttons === 0) {
          document.removeEventListener('mousemove', mousemove);
          document.removeEventListener('mouseup', mouseup);
          isListeningMouse = false;
        }
      }
      if (!isListeningMouse) {
        document.addEventListener('mousemove', mousemove);
        document.addEventListener('mouseup', mouseup);
        isListeningMouse = true;
      }
    });

    //触摸屏事件监听
    let contexts = new Map();
    element.addEventListener("touchstart", event => {
      for (let touch of event.changedTouches) {
        let context = Object.create(null);
        contexts.set(touch.identifier, context)
        recognizer.start(touch, context)
      }
    });

    element.addEventListener("touchmove", event => {
      for (let touch of event.changedTouches) {
        let context = contexts.get(touch.identifier)
        recognizer.move(touch, context)
      }
    });

    element.addEventListener("touchend", event => {
      for (let touch of event.changedTouches) {
        let context = contexts.get(touch.identifier);
        recognizer.end(touch, context);
        contexts.delete(touch.identifier)
      }
    })

    element.addEventListener("touchcancel", event => {
      for (let touch of event.changedTouches) {
        let context = contexts.get(touch.identifier);
        recognizer.cancel(touch, context);
        contexts.delete(touch.identifier);
      }
    });
  }
}

export class Recognizer {

  constructor(dispatcher) {
    this.dispatcher = dispatcher
  }

  start(point, context) {
    context.startX = point.clientX, context.startY = point.clientY;
    context.points = [{
      t: Date.now(),
      x: point.clientX,
      y: point.clientY
    }]

    context.isPan = false;
    context.isTap = true;
    context.isPress = false;

    context.handler = setTimeout(() => {
      context.isTap = false;
      context.isPan = false;
      context.isPress = true;
      context.handler = null;

      this.dispatcher.dispatch("press", {})

    }, 500)
  }

  move(point, context) {
    const {
      clientX,
      clientY
    } = point

    let dx = clientX - context.startX,
      dy = clientY - context.startY;

    if (!context.isPan && dx ** 2 + dy ** 2 > 100) {
      context.isTap = false;
      context.isPan = true;
      context.isPress = false;
      context.isVertical = Math.abs(dx) < Math.abs(dy);
      this.dispatcher.dispatch("panstart", {
        clientX,
        clientY,
        startX: context.startX,
        startY: context.startY,
        isVertical: context.isVertical
      })

      clearTimeout(context.handler);
    }

    if (context.isPan) {
      this.dispatcher.dispatch("pan", {
        clientX,
        clientY,
        startX: context.startX,
        startY: context.startY,
        isVertical: context.isVertical
      })
    }

    context.points = context.points.filter(point => Date.now() - point.t < 500);

    context.points.push({
      t: Date.now(),
      x: point.clientX,
      y: point.clientY
    })
  }

  end(point, context) {
    if (context.isTap) {
      this.dispatcher.dispatch('tap', {})
      clearTimeout(context.handler)
    }


    if (context.isPress) {
      this.dispatcher.dispatch('pressend', {})
    }

    //计算速度，速度的单位是像素没毫秒
    let v = 0,
      s;

    if (context.points.length < 1) {
      v = 0;
    } else {
      context.points = context.points.filter(point => Date.now() - point.t < 500);
      s = Math.sqrt((point.clientX - context.points[0].x) ** 2 +
        (point.clientY - context.points[0].y) ** 2);
      v = s / (Date.now() - context.points[0].t);
    }

    context.isFlick = v > 1.5;
    const {clientX, clientY} = point;
    context.isFlick ? this.dispatcher.dispatch("panend", {
      clientX,
      clientY,
      startX: context.startX,
      startY: context.startY,
      isVertical: context.isVertical,
      isFlick: context.isFlick,
      velocity: v,
    }) : null;

    if (context.isPan) {
      this.dispatcher.dispatch("flick", {
        clientX,
        clientY,
        startX: context.startX,
        startY: context.startY,
        isVertical: context.isVertical,
        isFlick: context.isFlick
      })
    }

  }

  cancel(point, context) {
    clearTimeout(context.handler);
    this.dispatcher.dispatch("cancel", {});
  }

}

export function enableGesture(element) {

  new Listener(element, new Recognizer(new Dispatcher(element)));

}