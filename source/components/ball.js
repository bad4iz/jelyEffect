export default class Ball {

  constructor(x, y, radius, color) {
    this.x = x || 0;
    this.y = y || 0;
    this.radius = radius || 2;
    this.color = color || '#ff6600';

    this.vectorX = 0;
    this.vectorY = 0;

  }

  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }

  think(mouse) {
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;

    const dist = Math.sqrt(dx * dx + dy * dy);
    if(dist < 20) {
      const angle = Math.atan2(dy, dx);
      let tx = mouse.x + Math.cos(angle) * 20;
      let ty = mouse.y + Math.sin(angle) * 20;

      this.vectorX += tx - this.x;
      this.vectorY += ty - this.y;
    }

    this.x += this.vectorX;
    this.y += this.vectorY;
  }

  setPos(x,y) {
    this.x = x;
    this.y = y;
  }

}