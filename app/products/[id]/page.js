import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";

async function fetchProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  });

  const data = await res.json();
  return data;
}

export default async function ProductDetails({ params }) {
  const { id } = await params;
  const product = await fetchProduct(id);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-xl shadow">
        {/* IMAGE */}
        <div className="relative w-full h-[400px]">
          <Image
            src={product.images?.[0]}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>

        {/* INFO */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

          <p className="text-gray-600 mb-4">{product.description}</p>

          <p className="text-2xl font-bold text-[#1C65A2] mb-4">
            ${product.price}
          </p>

          <AddToCartButton
            product={product}
            className="bg-[#1C65A2] text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          />
        </div>
      </div>
    </div>
  );
}
