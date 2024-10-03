"use client";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentLocale = searchParams.get("lang") || Cookies.get("lang") || "en";

  const toggleLanguage = () => {
    const newLocale = currentLocale === "en" ? "ar" : "en";
    Cookies.set("lang", newLocale);

    const params = new URLSearchParams(searchParams);
    params.set("lang", newLocale);
    router.push(`${pathname}?${params.toString()}`);
    router.refresh();
  };

  useEffect(() => {
    const urlLang = searchParams.get("lang");

    if (urlLang && urlLang !== Cookies.get("lang")) {
      Cookies.set("lang", urlLang);
    }
    router.refresh();
  }, [searchParams]);

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 bg-gray-800 text-white rounded"
    >
      {currentLocale === "en" ? "العربية" : "English"}
    </button>
  );
}
