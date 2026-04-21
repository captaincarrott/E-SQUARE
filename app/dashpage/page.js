import fetchProducts from "@/lib/products/fetchProducts";
import DashBoard from "@/components/DashBoard";
import ProtectedRoutes from "../ProtectedRoutes";

export default async function DashPage() {
  const product = await fetchProducts();

  return (
    <ProtectedRoutes route="/auth">
      <DashBoard product={product} />
    </ProtectedRoutes>
  );
}
