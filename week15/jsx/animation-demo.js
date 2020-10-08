import {
  Timeline,
  Animation
} from './animation.js';

import {easeIn} from './ease.js'

const tl = new Timeline();
tl.start();
console.log("xx")
tl.add(new Animation(document.querySelector("#el").style, 'transform', 0, 500, 2000, 0, easeIn, v => `translateX(${v}px)`));

document.querySelector("#el2").style.transition = `transform 3s ease-in`;
document.querySelector("#el2").style.transform = `translateX(500px)`;

document.querySelector('#pause').addEventListener('click', () => {
  tl.pause();
})
document.querySelector('#resume').addEventListener('click', () => {
  tl.resume();
})