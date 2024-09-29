'use client'
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Sidebar from "@/components/Sidebar";
import CartSidebar from "@/components/CartSidebar";
import Dashboard from "@/components/DashBoard";
import ProtectedRoutes from "./ProtectedRoutes";
import DashNavBar from "@/components/DashNavBar";
export default function Home() {
  const router = useRouter()
  const token = useSelector((state) => state.auth.token)
  return (
    <ProtectedRoutes route='/auth'>
    <div className="">
      {/* <Navbar /> */}
      <main className="">
        {/* <Sidebar />
        <CartSidebar /> */}
          <Dashboard />
      </main>
    </div>
    </ProtectedRoutes>
  );
}
