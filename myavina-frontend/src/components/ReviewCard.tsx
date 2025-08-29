import Image from "next/image";
import { Review } from "@/data/reviews";
import { BadgeCheck } from "lucide-react";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-[#F6F6F6] rounded-lg p-6 flex flex-col justify-between gap-4 h-full">
      <div className="flex flex-col gap-4">
        {/* Stars */}
        <div className="flex text-black text-sm">
          {"★".repeat(review.rating)}
        </div>

        {/* Review text */}
        <p className="text-gray-700 text-sm md:text-lg flex-1">{review.text}</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center relative">
          {/* Avatar */}
          <div className="relative">
            <Image
              src={review.avatar}
              alt={review.name}
              width={50}
              height={50}
              className="rounded-full"
            />
            {/* Icon overlay */}
            <BadgeCheck
              className="absolute -bottom-2 -right-3 w-6 h-6 text-white"
              fill="green"
            />
          </div>

          {/* Name + location */}
          <div>
            <p className="font-light text-md">{review.name}</p>
            <p className="text-sm font-light text-[#828282]">
              {review.location}
            </p>
          </div>
        </div>

        {/* Date */}
        <p className="text-xs font-light text-[#828282]">{review.date}</p>
      </div>
    </div>
  );
}
