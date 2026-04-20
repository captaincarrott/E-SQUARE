"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

export default function ProtectedRoutes({ children, route }) {
  const router = useRouter();
  const reduxToken = useSelector((state) => state.auth.token);

  const [isAllowed, setIsAllowed] = useState(null);

  useEffect(() => {
    const cookieToken = Cookies.get("token");

    if (!cookieToken && !reduxToken) {
      router.replace(route);
      setIsAllowed(false);
    } else {
      setIsAllowed(true);
    }
  }, [reduxToken, router, route]);

  if (isAllowed === null) return null;

  if (!isAllowed) return null;

  return children;
}