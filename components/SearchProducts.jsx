// import { useState } from "react";
// import ProductsList from "./ProductsList";

// export default function SearchProducts({ products }) {
//   const [search, setSearch] = useState("");

//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(search.toLowerCase()),
//   );

//   return (
//     <div>
//       {/* SEARCH INPUT */}
//       <div className="p-6">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* PRODUCTS */}
//       <ProductsList products={filteredProducts} />
//     </div>
//   );
// }
