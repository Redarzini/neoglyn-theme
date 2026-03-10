// neoglyn-cart-drawer.js
class CartDrawer extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', (event) => {
      if (event.target === this) this.close();
    });

    this.querySelectorAll('.cart-drawer__close').forEach(button => {
      button.addEventListener('click', this.close.bind(this));
    });
  }

  open() {
    this.classList.add('is-active');
    document.body.classList.add('cart-drawer-open');
  }

  close() {
    this.classList.remove('is-active');
    document.body.classList.remove('cart-drawer-open');
  }
}

customElements.define('neoglyn-cart-drawer', CartDrawer);

// Listen for custom open events
document.addEventListener('open-cart-drawer', () => {
   const drawer = document.querySelector('neoglyn-cart-drawer');
   if(drawer) drawer.open();
});
