"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import LoadingSkeleton from "./LoadingSkeleton";

import PropTypes from "prop-types";
import { MersenneTwister19937, shuffle } from "random-js";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Suggestion = ({
  title,
  description,
  width,
  height,
  totalPerSlide,
  seed,
}) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: process.env.NEXT_PUBLIC_API_KEY,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        const engine = MersenneTwister19937.seed(seed);

        setMovies(shuffle(engine, data.results));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [seed]);

  if (loading)
    return (
      <p>
        <LoadingSkeleton />
      </p>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-full mx-auto my-0 overflow-hidden p-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
          1440: { slidesPerView: 6 },
        }}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="flex flex-col items-center p-4 rounded-lg overflow-hidden relative h-full"
              onClick={() => {
                router.push(`./movie/${movie.id}`);
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-64 h-auto mb-4 rounded-md"
              />
              <h2 className="text-lg font-semibold text-white mb-2 truncate">
                {movie.title}
              </h2>
              <div className="mt-auto mb-8  w-full">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full">
                  Add to watchlist
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Suggestion.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  totalPerSlide: PropTypes.number,
  seed: PropTypes.number.isRequired,
};

export default Suggestion;
