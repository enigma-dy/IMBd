"use client";

import { title } from "process";
import React, { useEffect, useState } from "react";
import LoadingSkeleton from "@/app/components/LoadingSkeleton";

const Page = ({ params }) => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const { id } = params;

      if (!id) {
        setError({ message: "Movie ID not provided" });
        return;
      }

      const url = `https://api.themoviedb.org/3/movie/${id[0]}?language=en-US`;

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: process.env.NEXT_PUBLIC_API_KEY,
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const movieData = await response.json();
        setMovie(movieData);
      } catch (error) {
        setError(error);
      }
    };

    fetchMovie();
  }, [params]);

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  if (!movie) {
    return (
      <div>
        <LoadingSkeleton />
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "/fallback-image.png"
            }
            alt={movie.title}
            className="w-full md:w-1/3 rounded-lg shadow-lg"
          />
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
            {movie.tagline && (
              <p className="text-gray-400 mb-4">{movie.tagline}</p>
            )}
            <p className="text-lg">{movie.overview}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-red-600 text-sm px-3 py-1 rounded-full"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Movie Details</h2>
            <ul>
              <li>
                <strong>Release Date:</strong> {movie.release_date}
              </li>
              {movie.runtime && (
                <li>
                  <strong>Runtime:</strong> {movie.runtime} minutes
                </li>
              )}
              {movie.budget > 0 && (
                <li>
                  <strong>Budget:</strong> ${movie.budget.toLocaleString()}
                </li>
              )}
              {movie.revenue > 0 && (
                <li>
                  <strong>Revenue:</strong> ${movie.revenue.toLocaleString()}
                </li>
              )}
              <li>
                <strong>Vote Average:</strong> {movie.vote_average}
              </li>
              <li>
                <strong>Vote Count:</strong> {movie.vote_count}
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Production Companies
            </h2>
            <ul>
              {movie.production_companies.map((company) => (
                <li key={company.id} className="mb-2 flex items-center">
                  {company.logo_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                      alt={company.name}
                      className="w-12 h-12 mr-4"
                    />
                  ) : (
                    <div className="w-12 h-12 mr-4 bg-gray-700 flex items-center justify-center">
                      No Logo
                    </div>
                  )}
                  <span>{company.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
