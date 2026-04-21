import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage safely
const getInitialCart = () => {
  if (typeof window !== "undefined") {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch (e) {
      return [];
    }
  }
  return [];
};

// 💾 Save helper
const saveToLocalStorage = (items) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(items));
  }
};

const initialState = {
  items: getInitialCart(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //  ADD TO CART
    addToCart: (state, action) => {
      const product = action.payload;

      const exist = state.items.find((item) => item.id === product.id);

      if (exist) {
        exist.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      saveToLocalStorage(state.items);
    },

    // REMOVE ITEM
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      saveToLocalStorage(state.items);
    },

    //  INCREASE QTY
    increaseQty: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item) item.quantity += 1;

      saveToLocalStorage(state.items);
    },

    //  DECREASE QTY
    decreaseQty: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload,
          );
        }
      }

      saveToLocalStorage(state.items);
    },

    // CLEAR CART
    clearCart: (state) => {
      state.items = [];
      saveToLocalStorage(state.items);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
