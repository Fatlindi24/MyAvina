"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { symptoms } from "@/data/symptoms";

type Item = { name: string; slug: string };

function uniqBySlug(items: Item[]) {
  const seen = new Set<string>();
  return items.filter((i) =>
    seen.has(i.slug) ? false : (seen.add(i.slug), true)
  );
}

export default function SymptomsMenu({
  basePath = "/symptoms",
  className = "",
}: {
  basePath?: string;
  className?: string;
}) {
  const params = useParams<{ slug?: string }>();
  const activeSlug = (params?.slug as string) ?? ""; // empty = All

  const items = uniqBySlug(
    symptoms.map((s) => ({ name: s.name, slug: s.slug }))
  ).sort((a, b) => a.name.localeCompare(b.name));

  const linkCls = (slug?: string) =>
    `block px-2 pb-4 pt-6 hover:bg-gray-300 text-[18px] ${
      (slug ?? "") === activeSlug
        ? "border-b border-gray-300"
        : " border-b border-gray-300"
    }`;

  return (
    <div className={className}>
      {/* Mobile collapsible */}
      <details className="mb-4 lg:hidden bg-[#f6f6f6] rounded-lg text-black border border-gray-200">
        <summary className="cursor-pointer list-none px-4 py-3 font-normal flex items-center text-[20px] justify-between">
          SYMPTOMS
          <ChevronDown className="w-4 h-4" />
        </summary>
        <nav className="divide-y border-t">
          <Link
            href={basePath}
            className={linkCls("")}
            aria-current={activeSlug === "" ? "page" : undefined}
          >
            All
          </Link>
          {items.map(({ name, slug }) => (
            <Link
              key={slug}
              href={`${basePath}/${slug}`}
              className={linkCls(slug)}
              aria-current={activeSlug === slug ? "page" : undefined}
            >
              {name.toUpperCase()}
            </Link>
          ))}
        </nav>
      </details>

      {/* Desktop sticky aside */}
      <aside className="hidden lg:block  bg-[#f6f6f6] rounded-lg text-black border border-gray-200 p-4 sticky top-24 h-fit">
        <div className="font-normal text-[32px] mb-4">SYMPTOMS</div>
        <nav className="divide-y">
          <Link
            href={basePath}
            className={linkCls("")}
            aria-current={activeSlug === "" ? "page" : undefined}
          >
            All
          </Link>
          {items.map(({ name, slug }) => (
            <Link
              key={slug}
              href={`${basePath}/${slug}`}
              className={linkCls(slug)}
              aria-current={activeSlug === slug ? "page" : undefined}
            >
              {name.toUpperCase()}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
}
