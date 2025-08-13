import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: {
    id: string;
    slug: string;
    name: string;
    price: string;
    image: string;
    rating: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-purple-50 rounded-xl p-4 shadow-sm flex flex-col items-center text-center transition hover:shadow-md">
      <Image
        src={product.image}
        alt={product.name}
        width={160}
        height={160}
        className="mb-4 object-contain h-[160px]"
      />

      <h3 className="font-semibold text-base">{product.name}</h3>

      <p className="text-sm text-gray-500 mb-1">{product.price}</p>

      <div className="text-yellow-500 text-sm mb-4">
        {"★".repeat(product.rating)}
      </div>

      <Link
        href={`/products/${product.slug}`}
        className="inline-block px-4 py-1.5 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition"
      >
        Learn More
      </Link>
    </div>
  );
}
