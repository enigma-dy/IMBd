"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const UpNext = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: process.env.NEXT_PUBLIC_API_KEY,
      },
    };

    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        options
      );
      if (!res.ok) {
        throw new Error(`http error status: ${error.status} `);
      }
      const result = await res.json();
      setData(result.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) return null;
  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 rounded-lg">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center sm:text-left">
        Up Next
      </h2>

      <ul className="flex flex-wrap gap-6 justify-center">
        {data.slice(0, 6).map((movie) => (
          <li
            key={movie.id}
            className="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer"
            onClick={() => router.push(`movie/${movie.id}`)}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
              width={500}
              height={280}
              className="w-full sm:w-40 h-56 sm:h-48 object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>

            <div className="absolute bottom-0 p-4 text-center sm:text-left w-full">
              <h3 className="font-bold text-white text-lg sm:text-xl">
                {movie.title}
              </h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base">
                {movie.release_date}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <Link
        href="/trailers"
        className="block mt-10 text-center sm:text-left text-amber-400 text-xl sm:text-2xl md:text-3xl font-bold hover:text-amber-300 transition-colors duration-300 hover:underline"
      >
        Browse Trailers
      </Link>
    </div>
  );
};

export default UpNext;
