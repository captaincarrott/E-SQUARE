// 'use client';

// import { useState, useEffect } from "react";
// import { EyeOutlined, EyeInvisibleOutlined, CheckOutlined } from "@ant-design/icons";
// import { loginSuccess } from "@/lib/user/userSlice";
// import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import Image from "next/image";
// import Link from "next/link";
// import Cookies from "js-cookie";
// import background from "../public/images/background.jpg";
// import ar from "../public/locales/ar/translation.json";

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// export default function SignIn() {

//     const [currentLocale, setCurrentLocale] = useState('en');

//     useEffect(() => {
//         const lang = Cookies.get('lang');
//         if (lang) setCurrentLocale(lang);
//     }, []);

//     const [inputType, setInputType] = useState(false);
//     const dispatch = useDispatch();
//     const router = useRouter();

//     const [errors, setErrors] = useState({
//         emailError: false,
//         passError: false,
//         success: false,
//     });

//     const [formData, setFormData] = useState({
//         email: "",
//         password: "",
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });

//         if (e.target.name === "email") {
//             setErrors((prev) => ({
//                 ...prev,
//                 emailError:
//                     e.target.value !== "" && !emailRegex.test(e.target.value),
//             }));
//         }

//         if (e.target.name === "password") {
//             setErrors((prev) => ({
//                 ...prev,
//                 passError: e.target.value === "",
//             }));
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (formData.email && formData.password) {

//             const fakeUser = {
//                 email: formData.email,
//                 token: "fake-token-123456"
//             };

//             dispatch(loginSuccess(fakeUser));

//             Cookies.set("email", fakeUser.email);
//             Cookies.set("token", fakeUser.token);

//             setErrors((prev) => ({
//                 ...prev,
//                 success: true,
//             }));

//             router.push("/dashpage");

//         } else {
//             setErrors((prev) => ({
//                 ...prev,
//                 emailError: !formData.email,
//                 passError: !formData.password,
//             }));
//         }
//     };

//     useEffect(() => {
//         if (errors.success) {
//             const timer = setTimeout(() => {
//                 setErrors((prev) => ({
//                     ...prev,
//                     success: false,
//                 }));
//             }, 3000);

//             return () => clearTimeout(timer);
//         }
//     }, [errors.success]);

//     const typeHandler = () => {
//         setInputType((prev) => !prev);
//     };

//     return (
//         <div className="flex flex-col justify-center items-center h-dvh">

//             <div className="w-full absolute -z-10">
//                 <Image
//                     src={background}
//                     alt="background"
//                     className="w-full h-dvh object-cover"
//                 />
//             </div>

//             <form
//                 onSubmit={handleSubmit}
//                 className="my-8 flex flex-col rounded-[5px] bg-white p-4 sm:p-8 w-[90%] max-w-[576px] border-l-4 border-[#1C65A2]"
//             >
//                 <Link href="/">
//                     <h1 className="font-bold text-5xl text-[#606362]">
//                         <span className="text-[#1C65A2]">E</span>square²
//                     </h1>
//                 </Link>

//                 <div className="my-8">
//                     <h1 className="text-3xl font-bold">
//                         {currentLocale === "en" ? "Welcome" : ar.signin.welcome}
//                     </h1>

//                     <p className="text-[#606362]">
//                         {currentLocale === "en"
//                             ? "Enter to get access to our products and services"
//                             : ar.signin.description}
//                     </p>
//                 </div>

//                 {/* EMAIL */}
//                 <div>
//                     <label className="font-semibold text-sm">
//                         {currentLocale === "en" ? "Email" : ar.signin.email}
//                         <span className="text-red-600">*</span>
//                     </label>

//                     <input
//                         name="email"
//                         type="email"
//                         onChange={handleChange}
//                         required
//                         className="p-2 w-full border-2 border-[#E5E7EB] rounded-[5px]"
//                         placeholder={
//                             currentLocale === "en"
//                                 ? "Enter your email"
//                                 : ar.signin.enteremail
//                         }
//                     />

//                     {errors.emailError && (
//                         <span className="text-xs text-red-600">
//                             {currentLocale === "en"
//                                 ? "Invalid email"
//                                 : ar.signin.emailerror}
//                         </span>
//                     )}
//                 </div>

//                 {/* PASSWORD */}
//                 <div className="relative mt-4">
//                     <label className="font-semibold text-sm">
//                         {currentLocale === "en"
//                             ? "Password"
//                             : ar.signin.password}
//                         <span className="text-red-600">*</span>
//                     </label>

//                     <input
//                         name="password"
//                         type={inputType ? "text" : "password"}
//                         onChange={handleChange}
//                         required
//                         className="p-2 w-full border-2 border-[#E5E7EB] rounded-[5px]"
//                         placeholder={
//                             currentLocale === "en"
//                                 ? "Enter password"
//                                 : ar.signin.enterpass
//                         }
//                     />

//                     <div
//                         onClick={typeHandler}
//                         className="absolute top-9 right-3 cursor-pointer"
//                     >
//                         {inputType ? (
//                             <EyeInvisibleOutlined />
//                         ) : (
//                             <EyeOutlined />
//                         )}
//                     </div>

//                     {errors.passError && (
//                         <span className="text-xs text-red-600">
//                             {currentLocale === "en"
//                                 ? "Password required"
//                                 : ar.signin.passerror}
//                         </span>
//                     )}
//                 </div>

//                 <input
//                     type="submit"
//                     value={currentLocale === "en" ? "Sign In" : ar.signin.signin}
//                     className="mt-8 text-white p-2 cursor-pointer rounded-[5px] w-32 bg-[#1C65A2]"
//                 />
//             </form>

//             {errors.success && (
//                 <div className="fixed top-5 p-2 bg-[#1C65A2] rounded-[5px] text-white flex items-center gap-2">
//                     <CheckOutlined />
//                     Success!
//                 </div>
//             )}
//         </div>
//     );
// }
