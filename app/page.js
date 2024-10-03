import Navbar from "@/components/Navbar";
import { useSelector } from "react-redux";
import Sidebar from "@/components/Sidebar";
import CartSidebar from "@/components/CartSidebar";
import Dashboard from "@/components/DashBoard";
import ProtectedRoutes from "./ProtectedRoutes";
import DashNavBar from "@/components/DashNavBar";
import DashFetch from "@/components/DashFetch";
export default async function Home() {
  const product = await DashFetch()
  return (
    <ProtectedRoutes route='/auth'>
    <div className="">
      {/* <Navbar /> */}
      <main className="">
        {/* <Sidebar />
        <CartSidebar /> */}
          <Dashboard product={product}/>
      </main>
    </div>
    </ProtectedRoutes>
  );
}
