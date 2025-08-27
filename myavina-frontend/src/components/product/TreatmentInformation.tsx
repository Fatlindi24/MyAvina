import { Plus } from "lucide-react";
import type { Product } from "@/data/products";

export default function TreatmentInformation({
  product,
}: {
  product: Product;
}) {
  const items = [
    {
      title: "DESCRIPTION",
      content: product.description && <p>{product.description}</p>,
    },
    { title: "HOW TO USE", content: product.usage && <p>{product.usage}</p> },
    {
      title: "INGREDIENTS",
      content: product.ingredients?.length ? (
        <ul className="list-disc list-inside space-y-1">
          {product.ingredients.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      ) : null,
    },
    {
      title: "SAFETY INFORMATION",
      content: product.safety && <p>{product.safety}</p>,
    },
    {
      title: "BENEFITS",
      content: product.benefits?.length ? (
        <ul className="list-disc list-inside space-y-1">
          {product.benefits.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      ) : null,
    },
  ].filter((i) => i.content);

  if (!items.length) return null;

  return (
    <section className="container mx-auto mb-16">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Treatment Information
        </h2>

        <div className="flex flex-col divide-y divide-gray-200">
          {items.map(({ title, content }) => (
            <details key={title} className="group py-4">
              {/* Header */}
              <summary className="flex items-center gap-4 cursor-pointer font-medium list-none">
                <Plus
                  className="w-4 h-4 text-purple-600 transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
                {title}
              </summary>

              {/* Smooth animated content */}
              <div
                className="
                  overflow-hidden 
                  transition-all duration-300 ease-in-out 
                  max-h-0 opacity-0 translate-y-1
                  group-open:max-h-96 group-open:opacity-100 group-open:translate-y-0
                "
              >
                <div className="mt-3 text-gray-600">{content}</div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
