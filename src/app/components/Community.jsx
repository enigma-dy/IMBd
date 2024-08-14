import React from "react";
import Link from "next/link";

const Community = () => {
  const categories = ["Help Center", "Contributor Zone", "Polls"];

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
export default Community;
