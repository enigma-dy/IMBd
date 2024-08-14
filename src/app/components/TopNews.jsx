"use client";

import React, { useEffect, useState } from "react";
import LoadingSkeleton from "./LoadingSkeleton";

const TopNews = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDc4ZWYzYzg3ZDdhYzZmZjYxZDUyYTIxNzNjNzdkZCIsIm5iZiI6MTcyMzIyMzA5OC40NTk2OTEsInN1YiI6IjY2YjQ3NzNkYTFkOWM3YTRmYTJiMmZjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DaWPh7CH2NVdpzitU7IUUVgLhJ18SEJz_g73Exd1LFY",
      },
    };
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/tv/latest",
        options
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return null;
  }
  if (error) {
    return (
      <div className="text-red-500 text-center mt-10">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="relative max-w-md mx-auto shadow-lg rounded-lg overflow-hidden mt-10">
      {data.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.name}
          className="w-full h-96 object-cover"
        />
      ) : (
        <div className="h-96 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400">No Image Available</span>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
        <h2 className="text-2xl font-bold text-white mb-2">{data.name}</h2>
        <p className="text-white mb-4">{data.overview}</p>
        <div className="mt-auto">
          <p className="text-sm text-gray-200">
            <span className="font-semibold">First Air Date:</span>{" "}
            {data.first_air_date || "TBA"}
          </p>
          <p className="text-sm text-gray-200">
            <span className="font-semibold">Status:</span> {data.status}
          </p>
          <p className="text-sm text-gray-200">
            <span className="font-semibold">Original Language:</span>{" "}
            {data.original_language.toUpperCase()}
          </p>
          <p className="text-sm text-gray-200">
            <span className="font-semibold">Vote Average:</span>{" "}
            {data.vote_average}
          </p>
          <p className="text-sm text-gray-200">
            <span className="font-semibold">Number of Seasons:</span>{" "}
            {data.number_of_seasons}
          </p>
          <p className="text-sm text-gray-200">
            <span className="font-semibold">Number of Episodes:</span>{" "}
            {data.number_of_episodes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopNews;
