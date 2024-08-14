import React from "react";
import Link from "next/link";

const Watch = () => {
  const categories = [
    "What to Watch",
    "Latest Triller",
    "IMDb Originals",
    "IMDb Picks",
    "IMDb Spotlight",
    "IMDb Podcasts",
  ];

  return (
    <div>
      <h1>Movies</h1>
      <ul className="flex flex-col gap-2">
        {categories.map((category) => (
          <Link href={category} className="text-blue-600 italic">
            {category}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Watch;
