// export default async function DashFetch() {
//   const res = await fetch("https://fakestoreapi.com/products", {
//     next: { revalidate: 60 },
//   });

//   if (!res.ok) throw new Error("API failed");

//   const data = await res.json();
//   return data.products;
// }