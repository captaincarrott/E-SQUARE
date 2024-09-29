'use client';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = searchParams.get('lang') || 'en';

  const toggleLanguage = () => {
    const nextLocale = currentLocale === 'en' ? 'ar' : 'en';
    console.log(currentLocale);
    
    const params = new URLSearchParams(searchParams);
    params.set('lang', nextLocale);

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 bg-gray-800 text-white rounded"
    >
      {currentLocale === 'en' ? 'العربية' : 'English'}
    </button>
  );
}
