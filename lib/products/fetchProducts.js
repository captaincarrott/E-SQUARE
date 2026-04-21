// import axios from "axios";

// export default async function fetchProducts() {
//   try {
//     const response = await axios.get(
//       "https://fakestoreapi.com/products/1"
//     );

//     return response.data;
//   } catch (error) {
//     console.log("API Error:", error.message);
//     return []; // مهم جدًا عشان ما يكسرش الصفحة
//   }
// }

export default async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products");

  const data = await res.json();

  return data.products; // 👈 أهم سطر
}
