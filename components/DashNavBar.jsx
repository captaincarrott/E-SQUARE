// "use client";

// import { logout } from "@/lib/user/userSlice";
// import {
//   SearchOutlined,
//   ShoppingCartOutlined,
//   UserOutlined,
//   MenuOutlined,
// } from "@ant-design/icons";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import Cookies from "js-cookie";
// import LanguageSwitcher from "./LanguageSwitcher";
// import ar from "../public/locales/ar/translation.json";
// import { useEffect, useState } from "react";

// const DashNavBar = function () {
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const token = useSelector((state) => state.auth.token);

//   const [currentLocale, setCurrentLocale] = useState("en");

//   useEffect(() => {
//     const langFromCookie = Cookies.get("lang");
//     setCurrentLocale(langFromCookie || "en");
//   }, []);

//   const handleLogOut = function () {
//     dispatch(logout());
//     Cookies.remove("email");
//     Cookies.remove("token");
//   };

//   return (
//     <div>
//       <div className="flex justify-between px-2 py-[10px]">
//         <div onClick={() => router.push("/")}>
//           <Link href="/dashpage">
//             <h1 className="font-bold text-2xl text-[#606362] cursor-pointer">
//               <span className="text-[#1C65A2]">
//                 {currentLocale === "en" ? "D" : "ل"}
//               </span>
//               {currentLocale === "en" ? "ashboard" : "وحة التحكم"}
//             </h1>
//           </Link>
//         </div>

//         <div>
//           <LanguageSwitcher />

//           {token && (
//             <button
//               className="bg-red-700 text-white text-xs p-2 rounded mx-1"
//               onClick={handleLogOut}
//             >
//               {currentLocale === "en" ? "Log out" : ar.navbar.logout}
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashNavBar;
