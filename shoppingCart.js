const cartItemWrapper = document.querySelector('[data-cart-item-wrapper]');
const cartButton = document.querySelector('[ data-cart-button]');

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
}

// add item to cart
// handle click event for adding
// handle multiple of the same item in cart
// calculate an accute total
