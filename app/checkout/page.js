"use client";

import { useSelector, useDispatch } from "react-redux";
import { setCartAside } from "@/lib/cart/sidebarSlice";
import { clearCart } from "@/lib/cart/cartSlice";

export default function CheckoutPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  function handleOrder() {
    alert("🎉 Order placed successfully!");
    dispatch(clearCart());
    dispatch(setCartAside(false));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {/* LEFT - FORM */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">Shipping Details 📦</h2>

          <div className="flex flex-col gap-4">
            <input placeholder="Full Name" className="border p-3 rounded" />
            <input placeholder="Phone Number" className="border p-3 rounded" />
            <input placeholder="Address" className="border p-3 rounded" />
            <input placeholder="City" className="border p-3 rounded" />
          </div>

          <h2 className="text-xl font-bold mt-6 mb-3">Payment Method 💳</h2>

          <div className="flex gap-3">
            <button className="border px-4 py-2 rounded">
              Cash on Delivery
            </button>
            <button className="border px-4 py-2 rounded">Card</button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow h-fit">
          <h2 className="text-2xl font-bold mb-4">Order Summary 🛒</h2>

          {items.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            <div className="flex flex-col gap-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-sm border-b pb-2"
                >
                  <p>
                    {item.title} × {item.quantity}
                  </p>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}

              <div className="flex justify-between font-bold mt-4 text-lg">
                <p>Total</p>
                <p className="text-[#1C65A2]">${total.toFixed(2)}</p>
              </div>

              <button
                onClick={handleOrder}
                className="bg-[#1C65A2] text-white w-full py-3 rounded mt-4 hover:bg-blue-700 transition"
              >
                Place Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
