export default class Mouse {
  constructor(canvas) {
    this.x = 0;
    this.y = 0;
    const rect = canvas.getBoundingClientRect();

    canvas.onmousemove = event => {
      this.x = event.clientX - rect.left;
      this.y = event.clientY - rect.top;
    }
  }
}