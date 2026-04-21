"use client";

import { useDispatch, useSelector } from "react-redux";
import { setCartAside } from "@/lib/cart/sidebarSlice";

const CartSidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.cartAside.cartAsideClose);

  return (
    <>
      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => dispatch(setCartAside(false))}
      />

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 p-6 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => dispatch(setCartAside(false))}
          className="text-red-500 mb-4"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">Your Cart 🛒</h2>

        {/* TEMP */}
        <p className="text-gray-500">Cart is empty</p>
      </div>
    </>
  );
};

export default CartSidebar;
