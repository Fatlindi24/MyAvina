"use client";
import Link from "next/link";
import { topics } from "@/data/topics";

export default function TopicsMenu() {
  return (
    <aside className="hidden md:block bg-[#f6f6f6] rounded-lg text-black border border-gray-200 p-4 sticky top-4 h-fit">
      <h3 className="text-[32px] mb-4">TOPICS</h3>
      {topics.map((t, index) => (
        <Link
          key={t.slug}
          href={`/learn/${t.slug}`}
          className={`block px-2 pb-4 pt-6 hover:bg-gray-300 text-[18px] ${
            index !== topics.length - 1 ? "border-b border-gray-300" : ""
          }`}
        >
          {t.name.toUpperCase()}
        </Link>
      ))}
    </aside>
  );
}
