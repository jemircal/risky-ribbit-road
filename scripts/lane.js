export class Lane extends HTMLElement {
  constructor() {
    super();
    console.log('I was built by caleb');
  }

  connectedCallback() {
    
  }
}
window.customElements.define('a-lane', Lane);
