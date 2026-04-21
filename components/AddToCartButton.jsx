"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/cart/cartSlice";

export default function AddToCartButton({ product }) {
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(addToCart(product));
  }

  return (
    <button
      onClick={handleAdd}
      className="bg-[#1C65A2] text-white px-6 py-2 rounded hover:bg-blue-700 transition"
    >
      Add to Cart 🛒
    </button>
  );
}
