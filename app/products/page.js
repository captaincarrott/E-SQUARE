import fetchProducts from '../../lib/products/fetchProducts'
import ProductsClient from '@/components/ProductsClient';

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div>
      <ProductsClient products={products} />
    </div>
  );
}
