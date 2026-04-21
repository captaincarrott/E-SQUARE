import { configureStore, combineReducers } from "@reduxjs/toolkit";

import productReducer from "./products/productSlice";
import sidebarSlice from "./dashboard/sidebarSlice";
import cartSideReducer from "./cart/sidebarSlice";
import cartReducer from "./cart/cartSlice";

const rootReducer = combineReducers({
  products: productReducer,
  sidebar: sidebarSlice,
  cartAside: cartSideReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
