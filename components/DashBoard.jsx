'use client';
import { useEffect, useState } from 'react';
import en from '../public/locales/en/translation.json';
import ar from '../public/locales/ar/translation.json';
import Cookies from 'js-cookie';
import { useSearchParams } from 'next/navigation';
import Spinner from './Spinner';

export default function DashBoard(props) {
  const [product, setProduct] = useState(null);
  const searchParams = useSearchParams();
  const currentLocale = searchParams.get('lang') || Cookies.get('lang') || 'en'; 
  const [locale, setLocale] = useState(currentLocale);

  
  const translations = locale === 'en' ? en : ar;

  useEffect(() => {
    if (locale !== currentLocale) {
      setLocale(currentLocale);
    }

    // Fetch product data
    setProduct(props.product);
  }, [currentLocale]); 

  if (!product) return <Spinner />; 

  return (
    <div>      
      <div key={product.id}>
        <h1>{translations.dashboard.title}</h1>
        <p>{translations.product?.description || product.description}</p>
        <p>{translations.product?.category || product.category}</p>
        <p>{translations.product?.count || 'Count'}: {product.rating.count}</p>
        <p>{translations.product?.rate || 'Rate'}: {product.rating.rate}</p>
      </div>
    </div>
  );
}
