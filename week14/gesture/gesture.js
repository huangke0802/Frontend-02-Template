let element = document.documentElement;
let isListeningMouse = false;
//鼠标监听事件
element.addEventListener('mousedown', e => {
  const {
    button
  } = e;
  let context = Object.create(null);
  contexts.set(`mouse${1 << button}`, context);

  start(e, context)
  const mousemove = event => {
    console.log(event)
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
        move(event, context);
      }
      button = button << 1;
    }
  }

  const mouseup = event => {
    console.log(`end`, event.button)
    let context = contexts.get(`mouse${1 << event.button}`);
    end(event, context);
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
    start(touch, context)
  }
});

element.addEventListener("touchmove", event => {
  for (let touch of event.changedTouches) {
    let context = contexts.get(touch.identifier)
    move(touch, context)
  }
});

element.addEventListener("touchend", event => {
  for (let touch of event.changedTouches) {
    let context = contexts.get(touch.identifier);
    end(touch, context);
    contexts.delete(touch.identifier)
  }
})

element.addEventListener("touchcancel", event => {
  for (let touch of event.changedTouches) {
    let context = contexts.get(touch.identifier);
    cancel(touch, context);
    contexts.delete(touch.identifier);
  }
});

let handler = null,
  isPan = false,
  isTap = true,
  isPress = false,

  startX, startY;

const start = (point, context) => {
  context.startX = point.clientX, context.startY = point.clientY;

  context.isPan = false;
  context.isTap = true;
  context.isPress = false;

  context.handler = setTimeout(() => {
    context.isTap = false;
    context.isPan = false;
    context.isPress = true;
    context.handler = null;
    console.log('press-start');
  }, 500)
}

const move = (point, context) => {
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
    console.log("pan-start");
    clearTimeout(context.handler);
  }

  if (context.isPan) {
    console.log(dx, dy);
    console.log("pan");
  }

}

const end = (point, context) => {
  if (context.isTap) {
    dispatch('tap', {})
    clearTimeout(context.handler)
  }

  if (context.isPan) {
    console.log('pan-end')
  }

  if (context.isPress) {
    console.log('press-end')
  }

}

const cancel = (point, context) => {
  clearTimeout(context.handler)
}

function dispatch(type, properties) {
  let event = new Event(type);
  for(let name in properties){
    event[name] = properties[name];
  }
  element.dispatchEvent(event)
}