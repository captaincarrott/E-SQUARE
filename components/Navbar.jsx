// 'use client'
// import { logout } from "@/lib/user/userSlice";
// import { SearchOutlined, ShoppingCartOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSideClose } from "@/lib/dashboard/sidebarSlice";
// import { setCartAside } from "@/lib/cart/sidebarSlice";

// const Navbar = function() {
//     const router = useRouter()
//     const dispatch = useDispatch()
//     const token = useSelector((state) => state.auth.token)
//     const sideClose = useSelector((state) => state.sidebar.sideClose)
//     const cartSideClose = useSelector((state) => state.cartAside.cartAsideClose); 

//     function handleCart() {
//         dispatch(setCartAside(!cartSideClose))
//     }

//     function handleSidebar() {
//         dispatch(setSideClose(!sideClose)); 
//     }
//   const handleLogOut = function() {
//     dispatch(logout());
//   }

//     return (
//         <div className="bg-gray-200 flex justify-center items-center">
//          <div className="bg-white justify-between flex w-full p-[25px] ">
//                 <div onClick={() => router.push('/')}>
//                 <Link href='/'><h1 className="font-bold text-2xl text-[#606362] cursor-pointer"><span className="text-[#1C65A2]">E</span>square²</h1></Link>
//                 </div>

//                 <div className="hidden text-[#1A61A7] font-bold md:block">
//                     <ul className="flex space-x-4 leading-loose">
//                         <li className="cursor-pointer">
//                             <Link href="/">Home</Link>
//                         </li>
//                         <li className="cursor-pointer">About Us</li>
//                         <li className="cursor-pointer">Services</li>
//                         <li className="cursor-pointer"><Link href='/products'>Our Products</Link></li>
//                         {token && <li className="cursor-pointer" onClick={() => router.push('/dashpage')}>Dashboard</li>}
//                     </ul>
//                 </div>

//                 <div className="space-x-5 flex justify-center items-center">
//                     <SearchOutlined className="text-xl cursor-pointer"/>
                    
//                         <UserOutlined onClick={() => router.push('/auth')} className="text-xl cursor-pointer"/>
//                     <ShoppingCartOutlined onClick={handleCart} className="text-xl cursor-pointer"/>
//                     <MenuOutlined onClick={handleSidebar} className={`${sideClose ? 'rotate-0 transition-all' : 'rotate-90 transition-all'}`}/>
//                     {token ? <button onClick={handleLogOut}>Log out</button> : null}
//                 </div>
//             </div> 
//         </div>
//     )
// }

// export default Navbar;
