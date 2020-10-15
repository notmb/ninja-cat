import * as PIXI from 'pixi.js';
import './ninja.css';
import ninjaImg from './ninja.jpg';

let w = window.innerWidth;
let h = window.innerHeight;

const renderer = new PIXI.Renderer({
  width: w,
  height: h,
});

function resize() {
  w = window.innerWidth;
  h = window.innerHeight;
  renderer.resize(w, h);
}

window.addEventListener('resize', resize);

document.body.appendChild(renderer.view);

const stage = new PIXI.Container();

const tex = PIXI.Texture.from(ninjaImg);
const img = new PIXI.Sprite(tex);

img.width = renderer.width;
img.height = renderer.height;

img.anchor.x = 0.5;
img.anchor.y = 0.5;
stage.addChild(img);

const ticker = new PIXI.Ticker();
ticker.start();

function fn() {
  img.x = renderer.screen.width / 2;
  img.y = renderer.screen.height / 2;
  img.rotation += 0.01;
  renderer.render(stage);
}
ticker.add(fn);
