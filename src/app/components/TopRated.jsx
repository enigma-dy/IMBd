"use client";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";
import LoadingSkeleton from "./LoadingSkeleton";

export default function TopRated() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  async function fetchTopMovies() {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: process.env.NEXT_PUBLIC_API_KEY,
        },
      };

      const res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      );
      const result = await res.json();
      setData(result.results);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch data", error);
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTopMovies();
  }, []);

  if (loading)
    return (
      <div className="w-full">
        <LoadingSkeleton />
      </div>
    );

  if (error)
    return (
      <div className="max-w-[1440px] w-screen mx-auto my-0 overflow-hidden">
        <p className="text-red-500 text-lg">Error: {error}</p>
      </div>
    );

  return (
    <div className="block w-full overflow-hidden mt-24 lg:mt-4 lg:flex">
      <div className="w-full lg:flex-1 relative">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {data && data.length > 0 ? (
            data.map((movie) => (
              <SwiperSlide
                key={movie.id}
                onClick={() => {
                  router.push(`/movie/${movie.id}`);
                }}
              >
                <div className="relative">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title}
                    className="w-full h-auto max-w-[1440px] mx-auto"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-2 sm:p-4 md:p-6 bg-gradient-to-t from-black via-transparent to-transparent text-white">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-1 sm:mb-2 md:mb-4">
                      {movie.title}
                    </p>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                      {movie.release_date}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <div className="text-center text-xl text-gray-500 py-8">
              No movies found
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
}
