export class Frog  extends HTMLElement {
  constructor(name) {
    super();
    console.log(`I am a frog named ${name}`);
    document.body.addEventListener('keydown', this.keyListener.bind(this));
    this.deadSound = new Audio('deadsound.mp3');
  }

  keyListener(evt) {
    let x, y;

    if (evt.keyCode === 39) { //left
      x = this.offsetWidth;
      y = 0;
    }
    if (evt.keyCode === 40) { //up
      x = 0;
      y = this.offsetHeight;
    }
    if (evt.keyCode === 38) { //down
      x = 0;
      y = this.offsetHeight*-1;
    }
    if (evt.keyCode === 37) { //right
      x = this.offsetWidth*-1;
      y = 0;
    }

    this.move(x, y);
  }

  move(x, y) {
    console.log('Move you frog!', x, y);
    this.style.top = `${this.offsetTop + y}px`;
    this.style.left = `${this.offsetLeft + x}px`;
  }

  dead() {
    this.deadSound.load();
    this.deadSound.play();
    console.log('I died');
  }
}

window.customElements.define('a-frog', Frog);
