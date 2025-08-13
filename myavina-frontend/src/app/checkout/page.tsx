// app/checkout/page.tsx
"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleCheckout = () => {
    alert("✅ Order placed successfully!");
    clearCart();
    router.push("/shop");
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCheckout();
        }}
        className="space-y-4"
      >
        <input
          type="email"
          placeholder="Your email"
          className="w-full border px-4 py-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 w-full"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
