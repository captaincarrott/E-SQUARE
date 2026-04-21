export default async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store", // 🔥 أهم تعديل
  });

  const data = await res.json();

  return data.products;
}
