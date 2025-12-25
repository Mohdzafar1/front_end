import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {
        existing.qty += 1;
        toast.info("Quantity updated");
      } else {
        state.items.push({ ...action.payload, qty: 1 });
        toast.success("Added to cart 🛒");
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    decreaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item.qty > 1) item.qty -= 1;

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
      toast.error("Item removed");
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
      toast.warn("Cart cleared");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseQty,
} = cartSlice.actions;

export default cartSlice.reducer;
