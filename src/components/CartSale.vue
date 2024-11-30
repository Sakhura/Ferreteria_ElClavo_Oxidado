<template>
    <div class="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul class="cart-items">
        <li v-for="item in cart.items" :key="item.id" class="cart-item">
          <h3>{{ item.nombre }}</h3>
          <div class="cart-item-details">
          <p class="price">Price: ${{ item.precio }} x {{ item.quantity }}</p>
          <p class="total">Total: ${{ item.precio * item.quantity }}</p>
          <button @click="removeFromCart(item.id)" class="remove-btn">Remove</button>
          </div>
        </li>
      </ul>
      <p v-if="cart.items.length === 0" class="empty-cart">Your cart is empty</p>
      <div v-else class="cart-summary">
        <p>Total Items: {{ cart.totalItems }}</p>
        <p>Total Price: ${{ cart.totalPrice }}</p>
        <button @click="clearCart" class="clear-cart-btn">Clear Cart</button>
      </div>
      <router-link to="/listadoproductos" class="back-to-products">Volver a productos</router-link>
    </div>
  </template>
 
  <script>
  import { cartState } from '../cartState';
 
  export default {
    setup() {
      const removeFromCart = (productId) => {
        cartState.removeItem(productId);
      };
 
      const clearCart = () => {
        cartState.clearCart();
      };
 
      return { cart: cartState, removeFromCart, clearCart };
    },
  };
  </script>
  <style scoped>
  
  .shopping-cart{
  border: 5px solid #9ba1df;
  padding: 20px;
  margin: 0 auto;
  max-width: 600px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  }
  .cart-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart-item {
  border-bottom: 3px solid #206dd8;
  padding: 10px;
}

.cart-item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price,
.total {
  margin: 0;
  font-weight: bold;
}

.remove-btn {
  background-color: rgb(188, 77, 77);
  color: #fff;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.empty-cart {
  text-align: center;
  padding: 10px;
}

.cart-summary {
  border-top: 3px solid #206dd8;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.clear-cart-btn {
  background-color: #ddd;
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.back-to-products {
  text-decoration: none;
  color: #000;
  font-weight: bold;
  margin-top: 10px;
  display: block;
  text-align: center;
  border-radius: 5px;
}

  </style>