import Link from "next/link";
import React from "react";

const Movies = () => {
  const categories = [
    "Release Calendar",
    "Top 250 Movies",
    "Most Popular Movies",
    "Browse Movies By Genre",
    "Top Box Office",
    "Showtimes & Tickets",
    "Movie News",
    "India Movie Spotlight",
  ];
  return (
    <div>
      <h1 className="text-black text-4xl font-bold m-3">Movies</h1>
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

export default Movies;
