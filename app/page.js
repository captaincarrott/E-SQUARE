import fetchProducts from "@/lib/products/fetchProducts";
import ProductsList from "@/components/ProductsList";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* HERO */}
      <section className="bg-[#1C65A2] text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Esquare²</h1>
        <p className="mb-6">Best products with best prices 🔥</p>
        <a
          href="/products"
          className="bg-white text-[#1C65A2] px-6 py-2 rounded font-semibold"
        >
          Shop Now
        </a>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <ProductsList products={products.slice(0, 6)} />
      </section>
    </div>
  );
}
