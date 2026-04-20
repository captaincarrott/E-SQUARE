import fetchProducts from "@/lib/products/fetchProducts";
import ProductsList from "@/components/ProductsList";

export default async function ProductsPage() {
  const products = await fetchProducts();

  return <ProductsList products={products} />;
}