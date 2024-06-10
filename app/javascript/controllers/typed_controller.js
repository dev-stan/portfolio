import { Controller } from "@hotwired/stimulus"
import Typed from 'typed.js';

// Connects to data-controller="typed"
export default class extends Controller {
  connect() {
    const typed = new Typed(this.element, {
      strings: ["I'm a full-stack developer."],
      typeSpeed: 50,
      showCursor: false,  // Disable the cursor
    });
  }
}
