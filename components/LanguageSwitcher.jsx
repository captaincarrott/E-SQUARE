"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [currentLocale, setCurrentLocale] = useState("en");

  useEffect(() => {
    const urlLang = searchParams?.get("lang");
    const cookieLang = Cookies.get("lang");

    setCurrentLocale(urlLang || cookieLang || "en");
  }, [searchParams]);

  const toggleLanguage = () => {
    const newLocale = currentLocale === "en" ? "ar" : "en";

    Cookies.set("lang", newLocale);

    const params = new URLSearchParams(searchParams?.toString());
    params.set("lang", newLocale);

    router.push(`${pathname}?${params.toString()}`);
    router.refresh();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 text-xs bg-gray-800 text-white rounded"
    >
      {currentLocale === "en" ? "العربية" : "English"}
    </button>
  );
}