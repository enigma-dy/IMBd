import Link from "next/link";
import React from "react";

export const Awards = () => {
  const categories = [
    `Oscars`,
    `Emmy's`,
    `TIFF`,
    `Festival Season`,
    `STARmeter Award`,
    `Award Central`,
    `All Event`,
  ];
  return (
    <div className="text-black">
      <h1 className="text-black text-4xl font-bold m-3">Awards and Events</h1>
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
