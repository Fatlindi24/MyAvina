import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  const category = decodeURIComponent(params.category).replace(/-/g, " ");
  return {
    title: `${category} | Shop | MyAvina`,
    description: `Explore our premium selection of ${category} tailored for your wellness.`,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const categorySlug = params.category;
  const categoryName = decodeURIComponent(categorySlug).replace(/-/g, " ");

  const categoryProducts = products.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  if (categoryProducts.length === 0) return notFound();

  return (
    <section className="container mx-auto px-6  py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-800 capitalize">
          {categoryName}
        </h2>
        <Link
          href="/shop"
          className="text-sm text-purple-600 font-medium hover:underline"
        >
          Back to All Products
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categoryProducts.map((product) => (
          <div
            key={product.id}
            className="bg-[#f8f6fc] rounded-xl p-4  flex flex-col justify-between transition hover:shadow-md"
          >
            {/* Top content */}
            <div className="text-center">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="mx-auto mb-4 object-contain h-[180px]"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-1">{product.price}</p>
              <p className="text-yellow-500 text-sm">
                {"★".repeat(product.rating)}
              </p>
            </div>

            {/* Button */}
            <div className="mt-4 flex justify-center">
              <Link
                href={`/products/${product.slug}`}
                className="inline-flex items-center justify-center px-5 py-2 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition"
              >
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
