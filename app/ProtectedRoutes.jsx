'use client';
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function ProtectedRoutes({children, route}) {
    const token = useSelector((state) => state.auth.token);
    const router = useRouter();
    const cookies = Cookies
    useEffect(() => {
        if (!cookies.get('token')) {
          router.replace(route); 
        }
      }, [token, router, route]);
    
      if (!cookies.get('token')) {
        return null; 
      }
    

    return children
}