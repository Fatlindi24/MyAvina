"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-black text-white px-6 py-2 mt-4 rounded-full hover:bg-gray-800 transition"
    >
      Add to Cart
    </button>
  );
}
