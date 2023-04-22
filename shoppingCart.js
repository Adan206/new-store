import items from './items.json';
import formatCurrency from './util/formatCurrency.js';
const cartItemWrapper = document.querySelector('[data-cart-item-wrapper]');
const cartButton = document.querySelector('[ data-cart-button]');
const cartItemTemplate = document.querySelector('[cart-item-template]');
const cartItemContainer = document.querySelector('[data-cart-items]');
const IMAGE_URL_CART = 'https://dummyimage.com/210x130';

let shoppingCart = [];

export function setupShoppingCart() {}

// add items to cart
// remove items from cart
// show/hide the cart when clicked
// show/hide the cart button when it has no item or when it goes from 0 to 1 item
// persist to multiple of the same item in the cart
// handle multiple of the same item in the cart

cartButton.addEventListener('click', (e) => {
  cartItemWrapper.classList.toggle('invisible');
});

export function addToCart(id) {
  shoppingCart.push({ id: id, quantity: 1 });
  console.log(shoppingCart);

  renderCart();
}

function renderCart() {
  shoppingCart.forEach((entry) => {
    const item = items.forEach((i) => entry.id === i.id);

    const cartItem = cartItemTemplate.content.cloneNode(true);

    const container = cartItem.querySelector('[data-item]');
    container.dataset.itemId = item.id;

    const name = cartItem.querySelector('[data-name]');
    name.innerText = item.name;

    const image = cartItem.querySelector('[data-image]');
    image.src = `${IMAGE_URL_CART}/${item.imageColor}/${item.imageColor}`;

    const price = cartItem.querySelector('[data-price]');
    price.innerText = formatCurrency(item.priceCents / 100);

    cartItemContainer.appendChild(crtItem);
  });
}

// add item to cart
// handle click event for adding
// handle multiple of the same item in cart
// calculate an accute total
