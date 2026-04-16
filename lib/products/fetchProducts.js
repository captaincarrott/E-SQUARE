import axios from "axios";

export default async function fetchProducts() {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products"
    );

    return response.data;
  } catch (error) {
    console.log("API Error:", error.message);
    return []; // مهم جدًا عشان ما يكسرش الصفحة
  }
}