"use client";
import { logout } from "@/lib/user/userSlice";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setSideClose } from "@/lib/dashboard/sidebarSlice";
import Cookies from "js-cookie";
import LanguageSwitcher from "./LanguageSwitcher";
import ar from "../public/locales/ar/translation.json";
import { useSearchParams } from "next/navigation";

const DashNavBar = function () {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  // const sideClose = useSelector((state) => state.sidebar.sideClose)

  const searchParams = useSearchParams();
  const currentLocale = searchParams.get("lang") || Cookies.get("lang");

  // function handleSidebar() {
  //     dispatch(setSideClose(!sideClose));
  // }
  const handleLogOut = function () {
    dispatch(logout());
    Cookies.remove("email");
    Cookies.remove("token");
  };

  return (
    <div>
      <div className="flex justify-between px-[25px] py-[10px]">
        <div className="text-center" onClick={() => router.push("/")}>
          <Link href="/dashpage">
            <h1 className="font-bold text-2xl text-[#606362] cursor-pointer">
              <span className="text-[#1C65A2]">
                {currentLocale === "en" ? "D" : "ل"}
              </span>
              {currentLocale === "en" ? "ashboard" : "وحة التحكم"}
            </h1>
          </Link>
        </div>
        <div></div>
        <div>
          <LanguageSwitcher />
          {token ? (
            <button
              className="bg-red-700 text-white p-2 rounded mx-2"
              onClick={handleLogOut}
            >
              {currentLocale === "en" ? "Log out" : ar.navbar.logout}
            </button>
          ) : null}
        </div>
      </div>
      <div className="bg-gray-200 flex justify-center items-center">
        {/* <div className="bg-white justify-between flex w-full p-[25px] ">
                {token && <MenuOutlined onClick={handleSidebar} className={`${sideClose ? 'rotate-0 transition-all' : ' rotate-90 transition-all'}`}/> }

                <div className="hidden text-[#1A61A7] font-bold sm:block">
                    <ul className="flex space-x-4 leading-loose">
                        <li className="cursor-pointer">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="cursor-pointer">About Us</li>
                        <li className="cursor-pointer">Services</li>
                        <li className="cursor-pointer"><Link href='/products'>Our Products</Link></li>
                        {token && <li className="cursor-pointer" onClick={() => router.push('/dashpage')}>Dashboard</li>}
                    </ul>
                </div> 

                <div className="space-x-5 flex justify-center items-center">
                    <SearchOutlined className="text-xl cursor-pointer"/>
                    
                        <UserOutlined onClick={() => router.push('/auth')} className="text-xl cursor-pointer"/>
                    <ShoppingCartOutlined className="text-xl cursor-pointer"/>
                    
                </div>
            </div> */}
      </div>
    </div>
  );
};

export default DashNavBar;
