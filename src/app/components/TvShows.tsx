import Link from "next/link";
import React from "react";

export default function TvShows() {
  const categories = [
    `What's on Tv & Streaming`,
    `Top 250 TV Shows`,
    `Most Popular TV Shows`,
    `Browse TV Shows by Genre`,
    `TV News`,
  ];
  return (
    <div>
      <h1 className="text-black text-4xl font-bold m-3">TV Shows</h1>
      <ul className="flex flex-col gap-2">
        {categories.map((category, id) => (
          <li key={id}>
            <Link href={category} className="text-blue-600 italic">
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
