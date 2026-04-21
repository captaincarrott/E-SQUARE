"use client";

import { useState } from "react";
import { logout } from "@/lib/user/userSlice";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setCartAside } from "@/lib/cart/sidebarSlice";

const Navbar = function () {
  const router = useRouter();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);
  const cartSideClose = useSelector((state) => state.cartAside.cartAsideClose);

  const [menuOpen, setMenuOpen] = useState(false);

  function handleCart() {
    dispatch(setCartAside(!cartSideClose));
  }

  function handleLogOut() {
    dispatch(logout());
  }

  return (
    <div className="bg-gray-200">
      {/* NAVBAR */}
      <div className="bg-white flex justify-between items-center w-full px-4 py-3 md:px-10 sticky top-0 z-30">
        {/* LOGO */}
        <Link href="/">
          <h1 className="font-bold text-2xl text-[#606362] cursor-pointer">
            <span className="text-[#1C65A2]">E</span>square²
          </h1>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:block text-[#1A61A7] font-bold">
          <ul className="flex space-x-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Services</li>
            <li>
              <Link href="/products">Our Products</Link>
            </li>

            {token && (
              <li
                className="cursor-pointer"
                onClick={() => router.push("/dashpage")}
              >
                Dashboard
              </li>
            )}
          </ul>
        </div>

        {/* ICONS */}
        <div className="flex items-center gap-4">
          <SearchOutlined className="text-xl cursor-pointer hover:text-blue-500 transition" />

          <UserOutlined
            onClick={() => router.push("/auth")}
            className="text-xl cursor-pointer hover:text-blue-500 transition"
          />

          <ShoppingCartOutlined
            onClick={handleCart}
            className="text-xl cursor-pointer hover:text-blue-500 transition"
          />

          {/* BURGER */}
          <MenuOutlined
            onClick={() => setMenuOpen(true)}
            className="text-xl cursor-pointer md:hidden"
          />

          {/* LOGOUT (DESKTOP) */}
          {token && (
            <button
              onClick={handleLogOut}
              className="hidden md:block text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Log out
            </button>
          )}
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 p-6 shadow-2xl transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE */}
        <button
          onClick={() => setMenuOpen(false)}
          className="mb-6 text-red-500 text-lg"
        >
          ✕
        </button>

        {/* MENU */}
        <div className="flex flex-col gap-5 text-[#1A61A7] font-semibold">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <p className="cursor-pointer">About Us</p>
          <p className="cursor-pointer">Services</p>

          <Link href="/products" onClick={() => setMenuOpen(false)}>
            Our Products
          </Link>

          {token && (
            <p
              className="cursor-pointer"
              onClick={() => {
                router.push("/dashpage");
                setMenuOpen(false);
              }}
            >
              Dashboard
            </p>
          )}

          {token && (
            <button
              onClick={() => {
                handleLogOut();
                setMenuOpen(false);
              }}
              className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
            >
              Log out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
