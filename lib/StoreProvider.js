"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { useEffect } from "react";
import { hydrate } from "./cart/cartSlice";

export default function StoreProvider({ children }) {
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    store.dispatch(hydrate(saved));
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
