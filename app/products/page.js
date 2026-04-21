import fetchProducts from "@/lib/products/fetchProducts";
import ProductsList from "@/components/ProductsList";

export default async function ProductsPage({ searchParams }) {
  const products = await fetchProducts();

  const params = await searchParams;
  const query = params?.query || "";

  console.log("QUERY:", query); // للتأكد

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()),
  );

  return <ProductsList products={filteredProducts} />;
}
