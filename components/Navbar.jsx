"use client";

import { useState } from "react";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setCartAside } from "@/lib/cart/sidebarSlice";

const Navbar = function () {
  const router = useRouter();
  const dispatch = useDispatch();

  const cartSideClose = useSelector((state) => state.cartAside.cartAsideClose);
  const cartItems = useSelector((state) => state.cart.items);

  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  function handleCart() {
    dispatch(setCartAside(!cartSideClose));
  }

  // 🔍 search function
  const goToSearch = () => {
    const trimmed = search.trim();
    if (!trimmed) return;

    router.push(`/products?query=${encodeURIComponent(trimmed)}`);
    setSearch("");
    setMenuOpen(false);
  };

  // ⌨️ Enter search
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      goToSearch();
    }
  };

  // 🛒 cart count
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/products">Our Products</Link>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* 🔍 SEARCH (DESKTOP) */}
          <div className="hidden md:flex items-center relative border rounded-md overflow-hidden">
            <input
              onKeyDown={handleSearch}
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 py-2 pr-10 outline-none w-[220px] md:w-[300px]"
            />

            {/* ICON INSIDE INPUT */}
            <SearchOutlined
              onClick={goToSearch}
              className="absolute right-3 text-gray-500 hover:text-[#1C65A2] cursor-pointer transition"
            />
          </div>

          {/* 🛒 CART */}
          <div className="relative">
            <ShoppingCartOutlined
              onClick={handleCart}
              className="text-xl cursor-pointer hover:text-blue-500 transition"
            />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          {/* 🍔 BURGER */}
          <MenuOutlined
            onClick={() => setMenuOpen(true)}
            className="text-xl cursor-pointer md:hidden"
          />
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition ${
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

        {/* 🔍 SEARCH (MOBILE) */}
        <div className="flex items-center relative border rounded-md overflow-hidden mb-6">
          <input
            onKeyDown={handleSearch}
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 pr-10 w-full outline-none"
          />

          {/* ICON INSIDE INPUT */}
          <SearchOutlined
            onClick={goToSearch}
            className="absolute right-3 text-gray-500 hover:text-[#1C65A2] cursor-pointer transition"
          />
        </div>

        {/* MENU */}
        <div className="flex flex-col gap-5 text-[#1A61A7] font-semibold">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="/products" onClick={() => setMenuOpen(false)}>
            Our Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
