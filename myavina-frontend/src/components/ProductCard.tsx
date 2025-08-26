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
    <div
      className="bg-[#F8F1FF] rounded-xl p-4 shadow-sm transition hover:shadow-md h-full
                    grid grid-rows-[auto_1fr_auto] text-center"
    >
      {/* Header (title + price/rating) */}
      <div className="flex  items-stretch justify-between text-left px">
        <h3 className="font-semibold flex-1 max-w-1/2">{product.name}</h3>
        <div className="flex flex-col items-end max-w-1/2 justify-between">
          <p className="text-sm text-gray-500">{product.price}</p>
          <div className="text-black text-sm leading-none">
            {"★".repeat(product.rating)}
          </div>
        </div>
      </div>

      {/* Image area with consistent aspect ratio (no px) */}
      <div className="relative w-full aspect-[4/3] my-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
          sizes="(min-width:1024px) 25vw, (min-width:640px) 33vw, 90vw"
        />
      </div>

      {/* Button */}
      <div>
        <Link
          href={`/products/${product.slug}`}
          className="inline-block w-full px-4 py-2 border border-black rounded-full text-sm font-medium
                     hover:bg-black hover:text-white transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
