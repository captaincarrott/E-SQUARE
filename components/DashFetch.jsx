export default async function DashFetch() {
      const res = await fetch('https://fakestoreapi.com/products/1');
      const productData = await res.json();    

    return productData
  };

  