<template>
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        <li v-for="item in cart.items" :key="item.id">
          <h3>{{ item.nombre }}</h3>
          <p>Price: ${{ item.precio }} x {{ item.quantity }}</p>
          <p>Total: ${{ item.precio * item.quantity }}</p>
          <button @click="removeFromCart(item.id)">Remove</button>
        </li>
      </ul>
      <p v-if="cart.items.length === 0">Your cart is empty</p>
      <div v-else>
        <p>Total Items: {{ cart.totalItems }}</p>
        <p>Total Price: ${{ cart.totalPrice }}</p>
        <button @click="clearCart">Clear Cart</button>
      </div>
      <router-link to="/">Volver a productos</router-link>
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