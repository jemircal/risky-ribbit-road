export class Lane extends HTMLElement {
  constructor() {
    super();
    console.log('I was built by caleb');
  }

  connectedCallback() {
    const myCars = Array.from(this.querySelectorAll('a-car'));
    let intervalId;
    intervalId = setInterval(() => {
      myCars.forEach(car => {
        const moveOk = car.move();
        if (!moveOk) {
          clearInterval(intervalId);
        };
      });
    }, Number(this.getAttribute('speed')));
  }
}
window.customElements.define('a-lane', Lane);
