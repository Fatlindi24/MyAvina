import Image from "next/image";
import Link from "next/link";

export default function SymptomCard({
  slug,
  name,
  short,
  image,
  lastReviewed,
}: {
  slug: string;
  name: string;
  short: string;
  image?: string;
  lastReviewed?: string;
}) {
  return (
    <article className="bg-white  overflow-hidden">
      <Link href={`/symptoms/${slug}`}>
        <div className="relative w-full h-56">
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover border border-gray-200 rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-white" />
          )}
        </div>
      </Link>
      <div className="">
        {lastReviewed && (
          <p className="text-[12px] text-black font-light uppercase mt-4 ">
            {lastReviewed}
          </p>
        )}
        <h3 className="mt-1 text-[18px] font-normal ">
          <Link href={`/symptoms/${slug}`} className="hover:underline">
            {name}
          </Link>
        </h3>
        <p className="mt-2 text-[14px] text-black line-clamp-3">{short}</p>
        <Link
          href={`/symptoms/${slug}`}
          className="mt-3 inline-flex items-center gap-1 py-2 btn px-4 rounded-full bg-black text-white text-[16px]"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
