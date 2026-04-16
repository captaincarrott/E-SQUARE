'use client';

import { useEffect, useState } from 'react';
import en from '../public/locales/en/translation.json';
import ar from '../public/locales/ar/translation.json';
import Cookies from 'js-cookie';
import Spinner from './Spinner';

export default function DashBoard({ product }) {
  const [locale, setLocale] = useState('en');
  const [data, setData] = useState(null);

  useEffect(() => {
    const lang =
      new URLSearchParams(window.location.search).get('lang') ||
      Cookies.get('lang') ||
      'en';

    setLocale(lang);
    setData(product);
  }, [product]);

  const translations = locale === 'en' ? en : ar;

  if (!data) return <Spinner />;

  return (
    <div>
      <h1>{translations.dashboard.title}</h1>

      <p>
        {translations.product?.description || data.description}
      </p>

      <p>
        {translations.product?.category || data.category}
      </p>

      <p>
        {translations.product?.count || 'Count'}: {data?.rating?.count}
      </p>

      <p>
        {translations.product?.rate || 'Rate'}: {data?.rating?.rate}
      </p>
    </div>
  );
}