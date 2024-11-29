import { reactive } from 'vue';
 
export const cartState = reactive({
  items: [],
 
  addItem(product) {
    const existingItem = this.items.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  },
 
  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
  },
 
  clearCart() {
    this.items = [];
  },
 
  get totalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  },
 
  get totalPrice() {
    return this.items.reduce((total, item) => total + item.quantity * item.precio, 0);
  },
});