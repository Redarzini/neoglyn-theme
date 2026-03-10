// neoglyn-popup.js
class NeoglynPopup extends HTMLElement {
  constructor() {
    super();
    this.delay = parseInt(this.dataset.delay || '3') * 1000;
    
    // Check session storage so we don't annoy users on every page load
    if (!sessionStorage.getItem('neoglynPopupClosed')) {
      setTimeout(() => this.open(), this.delay);
    }

    this.querySelectorAll('[data-close-popup]').forEach(btn => {
      btn.addEventListener('click', this.close.bind(this));
    });
    
    this.addEventListener('click', (e) => {
       if (e.target === this) this.close();
    });
  }

  open() {
    this.classList.add('is-active');
    document.body.classList.add('popup-open');
  }

  close() {
    this.classList.remove('is-active');
    document.body.classList.remove('popup-open');
    sessionStorage.setItem('neoglynPopupClosed', 'true');
  }
}

customElements.define('neoglyn-popup', NeoglynPopup);
