import {isOverlapping} from './borrowed.js';

export class Car extends HTMLElement {
  constructor() {
    super();
    console.log('I am alive!');
    this.maxLeft = window.screen.width;
  }

  connectedCallback() {
    console.log('I am added to the page!', this.getAttribute('pic'));
    this.frog = document.querySelector('a-frog');
    this.style.backgroundImage = `url(${this.getAttribute('pic')})`;
    this.style.left = this.getAttribute('space');
  }

  move() {
    if (this.offsetLeft > this.maxLeft) {
      this.style.left = `${this.offsetWidth * -1}px`;
    }
    this.style.left = `${this.offsetLeft + 50}px`;
    return this.moveOk();
    console.log('I am moving');
  }

  moveOk() {
    if (isOverlapping(this, this.frog)) {
      this.frog.dead();
      return false;
    }
    return true;
  }
}

window.customElements.define('a-car', Car);
