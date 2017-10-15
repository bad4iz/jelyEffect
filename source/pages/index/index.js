import './index.scss';
import 'normalize.css';

import Mouse from '../../components/mouse.js';
import Ball from '../../components/ball.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const pos = new Mouse(canvas);
const mouse = new Ball(0,0, 20, 'green');
const balls = [];
for (var i = 0; i < 200; i++) {
  balls.push(
    new Ball(Math.random() * 600, Math.random() * 600))
}


  function Render() {
    window.requestAnimationFrame(Render);

    ctx.clearRect(0, 0, 600, 600);
    mouse.setPos(pos.x, pos.y, 10);
    mouse.draw(ctx);

    balls.forEach(ball => {
      ball.think(pos);
      ball.draw(ctx)
    })

  }

  Render();