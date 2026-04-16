import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./user/userSlice";
import productReducer from "./products/productSlice";
import sidebarSlice from "./dashboard/sidebarSlice";
import cartSideReducer from "./cart/sidebarSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  sidebar: sidebarSlice,
  cartAside: cartSideReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});