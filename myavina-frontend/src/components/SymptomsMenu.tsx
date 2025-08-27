"use client";

import { useMemo } from "react";
import { symptoms } from "@/data/symptoms";
import { ChevronDown } from "lucide-react";

export default function SymptomsMenu({
  active,
  onSelect,
  className = "",
}: {
  active: string; // e.g., "ALL" or symptom name
  onSelect: (name: string) => void; // called when user clicks a symptom
  className?: string;
}) {
  const names = useMemo(
    () =>
      Array.from(new Set(symptoms.map((s) => s.name)))
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b)),
    []
  );

  return (
    <div className={className}>
      {/* Mobile collapsible */}
      <details className="mb-4 lg:hidden bg-white rounded-xl border border-gray-200">
        <summary className="cursor-pointer list-none px-4 py-3 font-semibold flex items-center justify-between">
          SYMPTOMS
          <ChevronDown className="w-4 h-4" />
        </summary>
        <ul className="divide-y border-t">
          <li>
            <button
              onClick={() => onSelect("ALL")}
              className={`w-full text-left px-4 py-2 text-sm ${
                active === "ALL" ? "bg-black text-white" : "hover:bg-gray-50"
              }`}
            >
              All
            </button>
          </li>
          {names.map((n) => (
            <li key={n}>
              <button
                onClick={() => onSelect(n)}
                className={`w-full text-left px-4 py-2 text-sm ${
                  active === n ? "bg-black text-white" : "hover:bg-gray-50"
                }`}
              >
                {n.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </details>

      {/* Desktop sticky aside */}
      <aside className="hidden lg:block bg-white rounded-xl border border-gray-200 sticky top-24 h-fit">
        <div className="px-4 py-3 font-semibold">SYMPTOMS</div>
        <ul className="divide-y">
          <li>
            <button
              onClick={() => onSelect("ALL")}
              className={`w-full text-left px-4 py-2 text-sm ${
                active === "ALL" ? "bg-black text-white" : "hover:bg-gray-50"
              }`}
            >
              All
            </button>
          </li>
          {names.map((n) => (
            <li key={n}>
              <button
                onClick={() => onSelect(n)}
                className={`w-full text-left px-4 py-2 text-sm ${
                  active === n ? "bg-black text-white" : "hover:bg-gray-50"
                }`}
              >
                {n.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
