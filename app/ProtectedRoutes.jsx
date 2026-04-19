"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function ProtectedRoutes({ children, route }) {
  const router = useRouter();
  const token = useSelector((state) => state.auth.token);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cookieToken = Cookies.get("token");

    if (!cookieToken && !token) {
      router.replace(route);
    }

    setLoading(false);
  }, [token, router, route]);

  if (loading) return null;

  if (!Cookies.get("token") && !token) {
    return null;
  }

  return children;
}