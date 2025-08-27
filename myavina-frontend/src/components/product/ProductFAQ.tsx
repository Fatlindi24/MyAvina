import { Plus, PlusCircle } from "lucide-react";

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
    <section className=" mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-[32px] md:text-[36px] font-normal text-gray-900 mb-8">
        MYAVINA {title}
      </h2>
      <div className="space-y-4">
        {faq.map((item, idx) => (
          <details key={idx} className="border-b border-gray-200 ">
            <summary className="px-6 py-4 cursor-pointer font-light text-[16px] md:text-[32px] flex items-center gap-5 justify-between">
              {item.q}
              <PlusCircle className="w-4 h-4 md:w-8 md:h-8" strokeWidth={1.5} />
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
