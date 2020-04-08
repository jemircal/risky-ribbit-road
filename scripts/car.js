export class Car extends HTMLElement {
  constructor() {
    super();
    console.log('I am alive!');

  }

  connectedCallback() {
    console.log('I am added to the page!', this.getAttribute('pic'));
    this.style.backgroundImage = `url(${this.getAttribute('pic')})`;
    this.style.left = this.getAttribute('space');
    setInterval(this.move.bind(this), 500);
  }

  move() {
    this.style.left = `${this.offsetLeft + 50}px`;
    console.log('I am moving');
  }
}

window.customElements.define('a-car', Car);
