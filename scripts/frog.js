export class Frog {
  constructor(name) {
    console.log(`I am a frog named ${name}`);
    this.frogBody = document.querySelector('[the-frog]');

    document.body.addEventListener('keydown', this.keyListener.bind(this));
  }

  keyListener(evt) {
    let x, y;

    if (evt.keyCode === 39) { //left
      x = this.frogBody.offsetWidth;
      y = 0;
    }
    if (evt.keyCode === 40) { //up
      x = 0;
      y = this.frogBody.offsetHeight;
    }
    if (evt.keyCode === 38) { //down
      x = 0;
      y = this.frogBody.offsetHeight*-1;
    }
    if (evt.keyCode === 37) { //right
      x = this.frogBody.offsetWidth*-1;
      y = 0;
    }

    this.move(x, y);
  }

  move(x, y) {
    console.log('Move you frog!', x, y);
    this.frogBody.style.top = `${this.frogBody.offsetTop + y}px`;
    this.frogBody.style.left = `${this.frogBody.offsetLeft + x}px`;
  }


}
