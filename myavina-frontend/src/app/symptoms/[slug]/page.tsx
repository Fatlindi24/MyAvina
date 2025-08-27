import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { symptoms } from "@/data/symptoms";
import { products } from "@/data/products";

export function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export default function SymptomDetail({
  params,
}: {
  params: { slug: string };
}) {
  const s = symptoms.find((x) => x.slug === params.slug);
  if (!s) return notFound();

  const recommended = products.filter((p) =>
    s.recommendedProductIds.includes(p.id)
  );
  const related = symptoms.filter((x) => s.relatedSymptoms.includes(x.slug));

  return (
    <div className="container mx-auto px-6 pt-10 pb-24">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-[32px] md:text-[44px] font-medium text-black">
          {s.name}
        </h1>
        <p className="text-gray-700 mt-2 max-w-2xl">{s.short}</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10">
        {/* LEFT: content */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-normal mb-2">What it is</h2>
            <p className="text-gray-800">{s.description}</p>
          </section>

          <section>
            <h2 className="text-xl font-normal mb-2">What helps</h2>
            <ul className="grid grid-cols-1 gap-2">
              {s.tips.map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-gray-900 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>

          {s.redFlags.length > 0 && (
            <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <h3 className="text-lg font-semibold mb-2">
                When to talk to a doctor
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-800">
                {s.redFlags.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </section>
          )}

          {s.faq.length > 0 && (
            <section>
              <h2 className="text-xl font-normal mb-4">FAQs</h2>
              <div className="space-y-4">
                {s.faq.map((f, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-200 p-4"
                  >
                    <p className="font-medium">{f.q}</p>
                    <p className="text-gray-700 mt-1">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* RIGHT: recommended treatments and related */}
        <aside className="space-y-6">
          {recommended.length > 0 && (
            <div>
              <h3 className="text-xl font-normal mb-3">
                Recommended Treatments
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {recommended.map((p) => (
                  <Link
                    key={p.id}
                    href={`/product/${p.slug}`}
                    className="bg-[#F6ECFF] rounded-xl p-4 hover:shadow-md transition block"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[12px] text-gray-500">
                          {p.category}
                        </p>
                        <p className="font-semibold">{p.name}</p>
                        <p className="text-[12px] text-gray-500 mt-1">
                          {p.price}
                        </p>
                      </div>
                    </div>
                    <span className="mt-3 inline-flex h-8 px-4 rounded-full border border-black text-[12px] items-center">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {related.length > 0 && (
            <div className="pt-2">
              <h4 className="text-lg font-normal mb-3">Related Symptoms</h4>
              <div className="flex flex-wrap gap-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/symptoms/${r.slug}`}
                    className="px-3 h-8 rounded-full border border-gray-300 text-[12px] inline-flex items-center"
                  >
                    {r.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
