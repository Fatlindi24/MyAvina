import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: {
    id: string;
    slug: string;
    name: string;
    price: string; // e.g., "$39/month"
    image: string;
    rating: number; // 0..5
    category?: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-[#F6ECFF] rounded-xl p-4  transition h-full">
      {/* Top row: title + price/rating */}
      <div className="flex items-start justify-between w-full gap-5">
        <div className="min-w-0">
          {/* <p className="text-[12px] leading-tight text-gray-500 truncate">
            {product.category || ""}
          </p> */}
          <h3 className="font-regular text-[16px] md:text-[20px] leading-tight mt-1 truncate">
            {product.name}
          </h3>
        </div>

        <div className="text-right shrink-0 ">
          <p className="text-[18px] text-[#9f9f9f]">{product.price}</p>
          <div className="text-black text-[12px] leading-none mt-1">
            {"★".repeat(product.rating)}
            {"☆".repeat(Math.max(0, 5 - product.rating))}
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="flex items-center justify-center py-4">
        <div className="relative w-full h-60 md:w-full md:h-75">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center justify-center  px-6 py-2.5 rounded-full border border-black text-[16px] hover:bg-black w-full hover:text-white transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
