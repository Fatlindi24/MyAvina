import { Plus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface ProductFAQProps {
  title: string;
  faq: FAQItem[];
}

export default function ProductFAQ({ title, faq }: ProductFAQProps) {
  if (!faq || faq.length === 0) return null;

  return (
    <section className="mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">{title}</h2>
      <div className="space-y-4">
        {faq.map((item, idx) => (
          <details key={idx} className="border border-gray-200 rounded-lg">
            <summary className="px-6 py-4 cursor-pointer font-medium flex items-center justify-between">
              {item.q}
              <Plus className="w-4 h-4" />
            </summary>
            <div className="px-6 pb-4 text-gray-600">
              <p>{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
