import DashFetch from "@/components/DashFetch";
import DashBoard from "@/components/DashBoard";
import ProtectedRoutes from "../ProtectedRoutes";

export default async function DashPage() {
  const product = await DashFetch();

  return (
    <ProtectedRoutes route="/auth">
      <DashBoard product={product} />
    </ProtectedRoutes>
  );
}