"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductsList({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <Link href={`/products/${product.id}`}>
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4"
          >
            <div className="w-full h-40 mb-4">
              <Image
                src={product.images?.[0] || "/placeholder.png"}
                alt={product.title}
                width={300}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>

            <h2 className="text-sm font-bold line-clamp-2">{product.title}</h2>

            <p className="text-blue-600 font-semibold mt-2">${product.price}</p>

            <button className="mt-3 w-full bg-[#1C65A2] text-white py-2 rounded-md hover:bg-blue-800 transition">
              View Product
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}
