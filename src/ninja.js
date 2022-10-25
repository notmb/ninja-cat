import * as PIXI from 'pixi.js';
import './ninja.css';
// import ninjaImg from './ninja.jpg';
import ninjaImg2 from './Ryzhyy.png';

const app = new PIXI.Application({
  width: 1280,
  height: 720,
  resolution: 1,
});

app.view.id = 'canvas';
app.renderer.view.style.position = 'absolute';
app.renderer.view.style.display = 'block';
app.renderer.autoResize = true;
app.renderer.backgroundColor = 0x061639;

document.body.appendChild(app.view);

const texture = PIXI.Texture.from(ninjaImg2);
let img = new PIXI.Sprite(texture);
app.stage.addChild(img);

img.scale.x = 0.05;
img.scale.y = 0.05;
img.anchor.set(-1, -3);

const canvas = document.getElementById('canvas');

function fn() {
  canvas.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowDown') {
      img.y += 1;
      app.renderer.render(app.stage);
      event.preventDefault();
    }
  });
}

app.ticker.add(fn);
