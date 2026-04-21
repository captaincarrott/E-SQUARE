"use client";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setCartAside } from "@/lib/cart/sidebarSlice";
import { removeFromCart, increaseQty, decreaseQty } from "@/lib/cart/cartSlice";

const CartSidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isOpen = useSelector((state) => state.cartAside.cartAsideClose);

  const items = useSelector((state) => state.cart.items);

  // 💰 total price
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

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
        className={`fixed top-0 right-0 h-full w-[320px] bg-white z-50 p-6 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE */}
        <button
          onClick={() => dispatch(setCartAside(false))}
          className="text-red-500 mb-4 text-lg"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">Your Cart 🛒</h2>

        {/* EMPTY CART */}
        {items.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-3 border-b pb-3">
                {/* IMAGE */}
                <img
                  src={item.image || item.thumbnail}
                  className="w-14 h-14 object-contain"
                />

                {/* INFO */}
                <div className="flex-1">
                  <p className="text-sm font-semibold line-clamp-1">
                    {item.title}
                  </p>

                  <p className="text-xs text-gray-500">${item.price}</p>

                  {/* QUANTITY CONTROLS */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => dispatch(decreaseQty(item.id))}
                      className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center font-bold"
                    >
                      -
                    </button>

                    <span className="text-sm font-medium">{item.quantity}</span>

                    <button
                      onClick={() => dispatch(increaseQty(item.id))}
                      className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* REMOVE */}
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500"
                >
                  ✕
                </button>
              </div>
            ))}

            {/* TOTAL */}
            <div className="border-t pt-3 mt-3">
              <h3 className="font-bold text-lg">Total: ${total.toFixed(2)}</h3>
            </div>

            {/* CHECKOUT BUTTON */}
            <button
              onClick={() => {
                router.push("/checkout");
                dispatch(setCartAside(false));
              }}
              className="bg-[#1C65A2] text-white w-full py-2 rounded mt-3 hover:bg-blue-700 transition"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
