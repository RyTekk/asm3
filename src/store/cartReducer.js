import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const itemInCart = state.find((i) => i.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity += action.payload.quantity;
      } else {
        state.push({ ...action.payload });
      }
    },
    increaseQuantity(state, action) {
      const item = state.find((i) => i.id === action.payload);
      item.quantity++;
    },
    decreaseQuantity(state, action) {
      const item = state.find((i) => i.id === action.payload);
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        return;
      }
    },
    removeItem(state, action) {
      const indexRemovedItem = state.findIndex((i) => i.id === action.payload);
      if (indexRemovedItem > -1) {
        state.splice(indexRemovedItem, 1);
      }
    },
  },
});

function cartMiddleware({ getState }) {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem("cartData", JSON.stringify(getState()));
    return result;
  };
}

function reHydrateStore() {
  if (localStorage.getItem("cartData") !== null) {
    return JSON.parse(localStorage.getItem("cartData"));
  }
}

export { cartMiddleware, reHydrateStore };

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;
